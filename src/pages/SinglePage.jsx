import { useEffect } from 'react';
import HomeSection from '../sections/HomeSection';
import AboutSection from '../sections/AboutSection';
import ServicesSection from '../sections/ServicesSection';
import TechnologiesSection from '../sections/TechnologiesSection';
import CareersSection from '../sections/CareersSection';
import ContactSection from '../sections/ContactSection';

export default function SinglePage() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <CareersSection />
      <ContactSection />
    </div>
  );
}

