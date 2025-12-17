import "@workspace/ui/styles/luxe.css";

import { Header } from "@workspace/ui/components/lux/blocks/lux-header";
import { Hero } from "@workspace/ui/components/lux/blocks/lux-hero";
import { Features } from "@workspace/ui/components/lux/blocks/lux-features";
import { ProductShowcase } from "@workspace/ui/components/lux/blocks/lux-product-showcase";
import { Testimonials } from "@workspace/ui/components/lux/blocks/lux-testimonials";
import { Newsletter } from "@workspace/ui/components/lux/blocks/lux-newsletter";
import { Footer } from "@workspace/ui/components/lux/blocks/lux-footer";

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
