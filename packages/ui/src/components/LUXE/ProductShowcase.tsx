import { Card, CardContent } from "@workspace/ui/components/card";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";
import { Heart, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "@workspace/ui/components/figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Classic Timepiece",
    category: "Watches",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1687078426457-89ce2b562eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXRjaCUyMHByb2R1Y3R8ZW58MXx8fHwxNzY0MzIwMjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Sale",
    rating: 4.8
  },
  {
    id: 2,
    name: "Leather Tote Bag",
    category: "Bags",
    price: 189,
    image: "https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGhhbmRiYWd8ZW58MXx8fHwxNzY0MjY5Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "New",
    rating: 5.0
  },
  {
    id: 3,
    name: "Premium Sneakers",
    category: "Footwear",
    price: 159,
    image: "https://images.unsplash.com/photo-1620989928625-08536e746255?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc25lYWtlcnN8ZW58MXx8fHwxNzY0MzQwMTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9
  },
  {
    id: 4,
    name: "Diamond Necklace",
    category: "Jewelry",
    price: 449,
    image: "https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwamV3ZWxyeXxlbnwxfHx8fDE3NjQzNDAxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Trending",
    rating: 4.7
  }
];

export function ProductShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Featured Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl mb-4">Best Sellers</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Discover our most loved pieces, handpicked for quality and style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                {product.badge && (
                  <Badge 
                    className="absolute top-4 left-4"
                    variant={product.badge === "Sale" ? "default" : "secondary"}
                  >
                    {product.badge}
                  </Badge>
                )}
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="outline" className="h-9 w-9 rounded-full bg-white hover:bg-zinc-50">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-9 w-9 rounded-full bg-white hover:bg-zinc-50">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <p className="text-zinc-500 mb-1">{product.category}</p>
                <h3 className="mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-zinc-300'} fill-current`} 
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                  <span className="text-zinc-600 ml-2">({product.rating})</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xl">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-zinc-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
