import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import DashboardPreview from "./sections/DashboardPreview";
import TrustedBy from "./sections/TrustedBy";
import Features from "./sections/Features";
import AISection from "./sections/AISection";
import Statistics from "./sections/Statistics";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030712] text-white">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Dashboard Preview */}
      <DashboardPreview />

      {/* Trusted By */}
      <TrustedBy />

      {/* Features */}
      <Features />

      {/* AI Section */}
      <AISection />

      {/* Statistics */}
      <Statistics />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}