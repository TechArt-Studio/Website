
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import Team from '@/components/Team';
import Blog from '@/components/Blog';
import PoweredBy from '@/components/PoweredBy';
import Contact from '@/components/Contact';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Reviews />
      <FAQ />
      <Team />
      <Blog />
      <PoweredBy />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
