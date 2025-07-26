import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1HPP34GLT50mFAtejxn-ddUYtgqtk6IN7pR2VhMGlJrY';
const SHEET_RANGE = process.env.GOOGLE_SHEET_RANGE || 'Sheet1!A:H';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Get IP address from headers
    const ip = req.headers['x-forwarded-for'] || 
               req.headers['x-real-ip'] || 
               req.connection?.remoteAddress || 
               req.socket?.remoteAddress ||
               req.ip ||
               'unknown';

    // Fetch location data from IP
    let locationData = {
      country: 'unknown',
      city: 'unknown',
      lat: 'unknown',
      lon: 'unknown',
      org: 'unknown'
    };

    try {
      const ipResponse = await fetch(`http://ip-api.com/json/${ip}`);
      const ipData = await ipResponse.json();
      
      if (ipData.status === 'success') {
        locationData = {
          country: ipData.country || 'unknown',
          city: ipData.city || 'unknown',
          lat: ipData.lat || 'unknown',
          lon: ipData.lon || 'unknown',
          org: ipData.org || 'unknown'
        };
      }
    } catch (error) {
      console.error('Error fetching IP data:', error);
    }

    // Read service account credentials from environment variable
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
      throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY environment variable is required');
    }
    
    const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data
    const timestamp = new Date().toISOString();
    const rowData = [
      email,
      timestamp,
      ip,
      locationData.country,
      locationData.city,
      locationData.lat,
      locationData.lon,
      locationData.org
    ];

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: SHEET_RANGE,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData]
      }
    });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully joined waitlist',
      data: {
        email,
        timestamp,
        ip,
        location: locationData
      }
    });

  } catch (error) {
    console.error('Error in join API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 