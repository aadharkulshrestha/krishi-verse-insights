
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-krishi-green-dark to-krishi-green-light rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Farming Approach?
              </h2>
              <p className="text-white/90 mb-6">
                Get started with KrishiVerse today and join thousands of farmers already using satellite 
                insights to improve yield, reduce costs, and farm sustainably.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-krishi-amber hover:bg-krishi-amber/90 text-foreground">
                  Download App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-krishi-green-dark">
                  Schedule Demo
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex justify-end">
              <img 
                src="https://images.unsplash.com/photo-1589924691265-2f2d61cb0587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Mobile app demonstration" 
                className="rounded-lg shadow-lg border-4 border-white h-64 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
