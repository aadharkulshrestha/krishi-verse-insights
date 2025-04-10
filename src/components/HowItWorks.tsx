
import { SectionTitle } from "@/components/ui/section-title";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Your Farm",
      description: "Register your farm location using GPS coordinates or by drawing boundaries on a map within our app."
    },
    {
      number: "02",
      title: "Get Satellite Insights",
      description: "Our system processes satellite imagery to analyze crop health, stress patterns, and growth stages."
    },
    {
      number: "03",
      title: "Receive Personalized Recommendations",
      description: "Based on your specific crops and soil conditions, get AI-generated advice on irrigation, fertilization, and pest control."
    },
    {
      number: "04",
      title: "Take Action & Monitor Results",
      description: "Implement recommendations and track improvements over time to continuously optimize your farming practices."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <SectionTitle subtext="Simple Process">
          How KrishiVerse Works
        </SectionTitle>
        
        <div className="relative mt-20">
          {/* Connection line */}
          <div className="absolute hidden md:block top-10 left-0 w-full h-0.5 bg-krishi-green-light/30" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex justify-center">
                  <div className="relative z-10 w-20 h-20 flex items-center justify-center rounded-full bg-krishi-green-dark text-white text-2xl font-bold shadow-lg mb-6">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{step.title}</h3>
                <p className="text-center text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
