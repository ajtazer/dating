import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ChatMockup } from "@/components/ChatMockup";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PrivacySection } from "@/components/PrivacySection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "tazer.dating";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <HowItWorksSection />
      <ChatMockup />
      {/* <TestimonialsSection />
      <PrivacySection /> */}
      <Footer />
    </div>
  );
};

export default Index;
