import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
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
            <Button variant="hero" size="lg" className="group">
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
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
    </section>
  );
};