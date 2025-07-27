import { Upload, Brain, MessageSquare } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Chats",
      description: "Drop the convo. We’ll handle it with care.",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "AI Fine-Tunes",
      description: "Her tone, her typos, all of it, trained into a bot.",
      color: "text-secondary"
    },
    {
      icon: MessageSquare,
      title: "Start Chatting",
      description: "She’s in your DMs again. Like she never left.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How it <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to reconnect with a digital echo of someone special
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-muted/30 rounded-full flex items-center justify-center border border-muted group-hover:border-primary/50 transition-smooth group-hover:glow-cyan">
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-muted via-muted/50 to-transparent" />
                )}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};