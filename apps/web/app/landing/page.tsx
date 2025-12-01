import "@workspace/ui/styles/luxe.css";

import { Header } from "@workspace/ui/components/blocks/luxe/lux-header";
import { Hero } from "@workspace/ui/components/blocks/luxe/lux-hero";
import { Features } from "@workspace/ui/components/blocks/luxe/lux-features";
import { ProductShowcase } from "@workspace/ui/components/blocks/luxe/lux-product-showcase";
import { Testimonials } from "@workspace/ui/components/blocks/luxe/lux-testimonials";
import { Newsletter } from "@workspace/ui/components/blocks/luxe/lux-newsletter";
import { Footer } from "@workspace/ui/components/blocks/luxe/lux-footer";

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
