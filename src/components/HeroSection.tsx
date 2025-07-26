import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Sparkles, Mail, X, Plane, PlaneIcon, LucideTicketsPlane, Rocket, RocketIcon } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useState } from "react";

export const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(validateEmail(value));
    }
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage("✨ You're on the list! We'll be in touch soon.");
        setEmail("");
        setTimeout(() => setShowPopup(false), 3000);
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <MessageCircle className="w-8 h-8 text-primary/40" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-6 h-6 text-secondary/40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Sparkles className="w-7 h-7 text-primary/30" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="text-foreground">Yaad aati h?</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
              Aati Rahegi!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Back in your DMs like she never left. 
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            The way she used to talk, tease, and care<br />All of it.
          </p>



          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => setShowPopup(true)}
            >
              <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Join the Waitlist
            </Button>
            <Button variant="nostalgic" size="lg">
              Help me build
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/60 mt-8">
            ✨my personal project
          </p>
        </div>
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Email Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          />
          
          {/* Modal */}
          <div className="relative max-w-md w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-pink-400/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
              {/* Close button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Join the Waitlist</h3>
                <p className="text-white/80">Be the first to know when we launch</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 ${
                      !isValidEmail && email !== "" ? 'border-red-400/50 focus:ring-red-400/50' : ''
                    }`}
                    disabled={loading}
                    autoFocus
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={loading || !email || !isValidEmail}
                  className="w-full bg-gradient-to-r from-cyan-400 to-pink-400 hover:from-cyan-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Joining...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <RocketIcon className="w-5 h-5 mr-2" />
                      Lesgo
                    </div>
                  )}
                </Button>
              </form>
              
              {message && (
                <div className={`mt-4 p-3 rounded-lg text-sm ${
                  message.includes("You're on the list") 
                    ? 'bg-green-500/20 border border-green-400/30 text-green-100' 
                    : 'bg-red-500/20 border border-red-400/30 text-red-100'
                }`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};