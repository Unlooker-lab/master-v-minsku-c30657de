import { useEffect } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyChooseMe from "@/components/landing/WhyChooseMe";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import About from "@/components/landing/About";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import StickyMobileCTA from "@/components/landing/StickyMobileCTA";
import Footer from "@/components/landing/Footer";

export default function Index() {
  useEffect(() => {
    document.title = "Ремонт компьютеров на выезде в Минске | МастерПК — частный мастер";

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", "Частный мастер по ремонту компьютеров и ноутбуков в Минске. Выезд на дом в день обращения. Диагностика, ремонт, установка Windows, апгрейд. Гарантия. +375 (29) 123-45-67");
    setMeta("keywords", "ремонт компьютеров Минск, мастер по ремонту ноутбуков Минск, срочный ремонт ПК на выезде Минск, ремонт ноутбука на дому Минск, установка Windows Минск");
    setMeta("og:title", "Ремонт компьютеров на выезде в Минске | МастерПК", true);
    setMeta("og:description", "Частный мастер — выезд в день обращения. Ремонт ПК и ноутбуков, установка Windows, апгрейд. Гарантия на работу.", true);
    setMeta("og:type", "website", true);

    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", window.location.origin);
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseMe />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <About />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      {/* Sticky mobile CTA — only shown on mobile via CSS */}
      <StickyMobileCTA />
      {/* Bottom padding on mobile for sticky bar */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
