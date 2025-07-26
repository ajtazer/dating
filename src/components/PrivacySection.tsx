import { Shield, Trash2, Lock } from "lucide-react";

export const PrivacySection = () => {
  return (
    <section className="py-24 px-6 bg-card/20">
      <div className="max-w-4xl mx-auto text-center">
        <Shield className="w-16 h-16 text-primary mx-auto mb-8" />
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Your memories, <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">protected</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Lock className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-semibold mb-2">Encrypted Processing</h3>
            <p className="text-sm text-muted-foreground">All data is encrypted during processing and training</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Trash2 className="w-8 h-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">No Permanent Storage</h3>
            <p className="text-sm text-muted-foreground">Your chats are deleted after the AI model is created</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-secondary mb-4" />
            <h3 className="font-semibold mb-2">Prototype Status</h3>
            <p className="text-sm text-muted-foreground">This is experimental technology—use at your own discretion</p>
          </div>
        </div>

        <div className="bg-muted/30 border border-border/50 rounded-lg p-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Important:</strong> This is a prototype exploring the intersection of AI and human memory. 
            While we take privacy seriously, please only upload conversations you're comfortable experimenting with. 
            This technology is not intended to replace professional grief counseling or therapy.
          </p>
        </div>
      </div>
    </section>
  );
};