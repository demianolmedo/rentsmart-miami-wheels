
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CarFleet from '@/components/CarFleet';
import Services from '@/components/Services';
import PricingSection from '@/components/PricingSection';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatbotWidget from '@/components/ChatbotWidget';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <CarFleet />
        <Services />
        <PricingSection />
        <Testimonials />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </div>
  );
};

export default Index;
