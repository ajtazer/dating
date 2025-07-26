import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "404 | tazer.dating";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Dynamically inject Sora font
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 text-center"
      style={{
        backgroundColor: "#0B0C10",
        fontFamily: "'Sora', sans-serif",
      }}
    >
      {/* Soft glowing blurry background gradient */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at top left, #00ffff33, transparent), radial-gradient(circle at bottom right, #ff5c8d33, transparent)",
            filter: "blur(80px)",
            opacity: 0.6,
            width: "100%",
            height: "100%",
          }}
        ></div>
      </div>

      <div className="z-10 max-w-xl">
        <h1 className="text-7xl font-bold text-white mb-4 animate-pulse">404</h1>
        <p className="text-xl text-[#CCCCCC] mb-6 leading-relaxed">
        Oops. This page doesn’t exist.
          <br />
          Just like the “closure” u thot u deserved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="group inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-foreground hover:from-primary/30 hover:to-secondary/30 hover:border-primary/50 backdrop-blur-sm glow-cyan hover:glow-pink transition-all duration-500 h-14 rounded-lg px-10 text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2 group-hover:animate-pulse">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
