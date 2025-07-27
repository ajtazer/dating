import { useState, useEffect, useRef } from "react";
import kirti from "@/assets/kitty.jpg";

export const ChatMockup = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const chatRef = useRef(null);

  const messages = [
    { text: "heloo", sent: true, delay: 500 },
    { text: "pls unblock me", sent: true, delay: 500 },
    { text: "You’re getting on my needles", sent: false, delay: 500 },
    { text: "Nerves*", sent: false, delay: 700 },
    { text: "One more text and I’ll file a complaint.", sent: false, delay: 1000 },
    { text: "Won’t you meet me just one more time?", sent: true, delay: 2000 },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => {
      if (chatRef.current) {
        observer.unobserve(chatRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && currentMessage < messages.length) {
      const message = messages[currentMessage];
      const timer = setTimeout(() => {
        if (message.sent) {
          setCurrentMessage((prev) => prev + 1);
        } else {
          setShowTyping(true);
          setTimeout(() => {
            setShowTyping(false);
            setCurrentMessage((prev) => prev + 1);
          }, 1000); // Typing indicator duration
        }
      }, message.delay);

      return () => clearTimeout(timer);
    } else if (currentMessage >= messages.length) {
        // Reset after a delay when all messages are shown
        const resetTimer = setTimeout(() => {
            setCurrentMessage(0);
            setShowTyping(false);
        }, 5000);
        return () => clearTimeout(resetTimer);
    }
  }, [isIntersecting, currentMessage]);

  return (
    <section ref={chatRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              like they <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">never left</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            It’s the way they spoke to you.
            The “hmm” when they were mad.
            The awkward silence when they didn’t know what to say.
            We trained our AI to bring that all back ~ but yeah, it takes a little time. Magic doesn’t happen instantly.
            So give us a minute. It’s okay to be a little spoiled.
            </p>
            <p className="text-lg text-muted-foreground">
            And hey — don’t worry if you start catching feelings. We get it. She feels just like her.
            </p>
          </div>

          <div className="relative">
            {/* Phone mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-muted/30 rounded-[2.5rem] border-8 border-muted/50 overflow-hidden">
              {/* Phone screen */}
              <div className="h-full bg-gradient-to-b from-background to-muted/20 p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <div className="w-10 h-10 bg-secondary/20 rounded-full overflow-hidden">
                    <img src={kirti} alt="Kitty" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium">Kitty</div>
                    <div className="text-xs text-muted-foreground">Online</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 py-6 space-y-4 overflow-y-auto">
                  {messages.slice(0, currentMessage).map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.sent ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
                    >
                      <div
                        className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                          message.sent
                            ? 'bg-primary text-primary-foreground rounded-br-md'
                            : 'bg-muted text-muted-foreground rounded-bl-md'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing indicator */}
                  {showTyping && (
                    <div className="flex justify-start animate-fade-in-up">
                      <div className="bg-muted text-muted-foreground px-4 py-2 rounded-2xl rounded-bl-md flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-current rounded-full animate-typing-dots" />
                          <div className="w-2 h-2 bg-current rounded-full animate-typing-dots" style={{ animationDelay: '0.2s' }} />
                          <div className="w-2 h-2 bg-current rounded-full animate-typing-dots" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-secondary/10 rounded-[2.5rem] animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};