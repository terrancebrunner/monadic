import { Header } from "@workspace/ui/components/LUXE/Header";
import { Hero } from "@workspace/ui/components/LUXE/Hero";
import { Features } from "@workspace/ui/components/LUXE/Features";
import { ProductShowcase } from "@workspace/ui/components/LUXE/ProductShowcase";
import { Testimonials } from "@workspace/ui/components/LUXE/Testimonials";
import { Newsletter } from "@workspace/ui/components/LUXE/Newsletter";
import { Footer } from "@workspace/ui/components/LUXE/Footer";

import "@workspace/ui/styles/luxe.css";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
