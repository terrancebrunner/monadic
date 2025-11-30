import { Button } from "@workspace/ui/components/ui/button";
import { Input } from "@workspace/ui/components/ui/input";
import { Mail } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-24 bg-zinc-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 mb-6">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl mb-4">Stay In The Loop</h2>
          <p className="text-xl text-zinc-300 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            style inspiration delivered to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-white border-white text-zinc-900 placeholder:text-zinc-500"
            />
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-zinc-400 mt-4">
            Join 10,000+ subscribers. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
