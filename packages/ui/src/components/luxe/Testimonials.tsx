import { Card, CardContent } from "@workspace/ui/components/card";
import { ImageWithFallback } from "@workspace/ui/components/figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    content:
      "Absolutely love the quality and attention to detail. Every piece I've purchased has exceeded my expectations. The customer service is outstanding!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjcwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Creative Director",
    content:
      "The perfect blend of modern design and timeless elegance. I've recommended this store to all my friends and colleagues.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjcwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Entrepreneur",
    content:
      "Fast shipping, beautiful packaging, and products that look even better in person. This is now my go-to for all special occasions.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1753161023962-665967602405?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGN1c3RvbWVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MjcwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for quality and
            style
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <p className="text-zinc-700 mb-6">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-zinc-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p>{testimonial.name}</p>
                    <p className="text-zinc-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl mb-2">5,000+</div>
            <p className="text-zinc-600">Happy Customers</p>
          </div>
          <div>
            <div className="text-4xl mb-2">4.9/5</div>
            <p className="text-zinc-600">Average Rating</p>
          </div>
          <div>
            <div className="text-4xl mb-2">10,000+</div>
            <p className="text-zinc-600">Products Sold</p>
          </div>
          <div>
            <div className="text-4xl mb-2">99%</div>
            <p className="text-zinc-600">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
