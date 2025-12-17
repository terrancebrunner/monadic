import { Truck, Shield, HeadphonesIcon, Package } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free shipping on all orders over $100",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment processing",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated customer support team",
  },
  {
    icon: Package,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
];

export function Features() {
  return (
    <section className="py-12 bg-white border-y border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center">
                <feature.icon className="h-6 w-6 text-zinc-900" />
              </div>
              <div>
                <h3 className="mb-1">{feature.title}</h3>
                <p className="text-zinc-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
