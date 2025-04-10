
import { SectionTitle } from "@/components/ui/section-title";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Benefits() {
  const benefitsList = [
    "Reduce water usage by up to 30%",
    "Early pest detection saves crops and reduces chemical use",
    "Increase yield by 20-30% with data-driven decisions",
    "Save time with automated monitoring and alerts",
    "Optimize fertilizer use based on actual soil needs",
    "Reduce overall farming costs and increase profitability"
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-krishi-cream/30">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="relative">
              <div className="absolute top-0 -left-4 w-40 h-40 bg-krishi-amber/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-krishi-green-light/20 rounded-full blur-2xl" />
              
              <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10">
              <div>
                  <img
                    src="/img1.jpg"
                    alt="Soil monitoring sensor"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = "/img1.jpg";
                      // Second fallback
                      e.currentTarget.onerror = () => {
                        e.currentTarget.src = "/img1.jpg";
                      };
                    }}
                  />
                </div>
                <div>
                  <img
                    src="/I2.jpg"
                    alt="Healthy crops"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = "https://images.unsplash.com/photo-1530507629858-e3759c371e54?w=800&auto=format&fit=crop&q=80";
                      // Second fallback
                      e.currentTarget.onerror = () => {
                        e.currentTarget.src = "/placeholder.svg";
                      };
                    }}
                  />
                </div>
                <div>
                  <img
                    src="/I3.jpg"
                    alt="Soil monitoring sensor"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = "/img1.jpg";
                      // Second fallback
                      e.currentTarget.onerror = () => {
                        e.currentTarget.src = "/img1.jpg";
                      };
                    }}
                  />
                </div>
                <div>
                  <img
                    src="/I4.jpg"
                    alt="Healthy crops"
                    className="w-full h-40 object-cover rounded-lg shadow-lg"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = "https://images.unsplash.com/photo-1530507629858-e3759c371e54?w=800&auto=format&fit=crop&q=80";
                      // Second fallback
                      e.currentTarget.onerror = () => {
                        e.currentTarget.src = "/placeholder.svg";
                      };
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <SectionTitle subtext="Why Choose KrishiVerse" className="md:text-left" subtextClassName="md:text-left">
              Benefits That Grow With Your Farm
            </SectionTitle>
            
            <div className="space-y-4 my-6">
              {benefitsList.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-krishi-green-dark flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-krishi-amber hover:bg-krishi-amber/90 text-foreground mt-4">
              Start Farming Smarter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
