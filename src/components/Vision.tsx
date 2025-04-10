
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";

export default function Vision() {
  return (
    <section id="vision" className="py-16 md:py-24 bg-krishi-green-dark text-white">
      <div className="container px-4 md:px-6">
        <SectionTitle subtext="Our Mission" className="text-white" subtextClassName="text-krishi-amber">
          Building a Smarter, More Sustainable Future for Farming
        </SectionTitle>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-8">
            We envision a connected ecosystem of farmers who make smarter decisions using real-time data, 
            helping improve food security, rural income, and environmental sustainability. KrishiVerse is 
            committed to bridging the gap between cutting-edge technology and everyday farming practices.
          </p>
          
          <blockquote className="italic text-xl md:text-2xl mb-8 px-4 border-l-4 border-krishi-amber">
            "From satellites to soil — KrishiVerse is your farm's new best friend."
          </blockquote>
          
          <Button className="bg-krishi-amber hover:bg-krishi-amber/90 text-foreground">
            Join Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}
