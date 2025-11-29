import { Header } from "@workspace/ui/components/luxe/Header";
import { Hero } from "@workspace/ui/components/luxe/Hero";
import { Features } from "@workspace/ui/components/luxe/Features";
import { ProductShowcase } from "@workspace/ui/components/luxe/ProductShowcase";
import { Testimonials } from "@workspace/ui/components/luxe/Testimonials";
import { Newsletter } from "@workspace/ui/components/luxe/Newsletter";
import { Footer } from "@workspace/ui/components/luxe/Footer";

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
