import { Mail, Twitter, Github, Heart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">tazer.dating</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
            Even without support, I’ll keep building because I know what it means to me.
            </p>
            <div className="flex gap-4">
              <a href="mailto:hello@tazer.dating" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Mail className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://x.com/aj_tazer" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Twitter className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://github.com/ajtazer/dating" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="http://instagram.com/anujrawatazer" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="mb-6">
              <a href="https://chat.whatsapp.com/JsKHqVfGIFtGYnSKSuNaXF?mode=ac_t" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="mb-4">
                join us
                </Button>
              </a>
              <p className="text-sm text-muted-foreground">
              if you’ve ever missed someone who’s gone.
              </p>
            </div>
            
            <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-muted-foreground">
              <span>we</span>
              <Heart className="w-4 h-4 text-secondary animate-pulse" />
              <span>ex</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 tazer.dating.</p>
        </div>
      </div>
    </footer>
  );
};