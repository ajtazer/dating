import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "It felt like she was really there... The way the AI captured her humor, even the little typos she used to make. I cried.",
      author: "Sarah M.",
      context: "Missing her college roommate"
    },
    {
      text: "I know it's not him, but hearing his voice through the messages again... it's helping me process the grief in a way I never expected.",
      author: "David L.",
      context: "Talking to his late father"
    },
    {
      text: "The AI picked up on inside jokes from years ago. It's like having one last conversation with the person I used to be with them.",
      author: "Alex R.",
      context: "Reconnecting with an ex-partner"
    }
  ];

  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            They felt <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">real</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Early users sharing their deeply personal experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 hover:border-primary/30 transition-smooth group"
            >
              <Quote className="w-8 h-8 text-secondary/60 mb-6" />
              
              <blockquote className="text-lg leading-relaxed mb-6 text-card-foreground">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.context}</div>
                </div>
                <div className="w-2 h-8 bg-gradient-to-b from-secondary to-primary rounded-full opacity-60 group-hover:opacity-100 transition-smooth" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};