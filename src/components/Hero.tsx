
import { Button } from "@/components/ui/button";
import { BadgeCustom } from "@/components/ui/badge-custom";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-krishi-cream to-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <BadgeCustom className="self-start animate-pulse-slow">
              AI-Powered Farming
            </BadgeCustom>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              From <span className="text-krishi-blue">Satellites</span> to <span className="text-krishi-green-dark">Soil</span>
              <span className="block mt-2">Empowering Farmers with Intelligence</span>
            </h1>
            <p className="text-muted-foreground md:text-xl">
              KrishiVerse combines satellite imagery, IoT sensing, and machine learning to help 
              farmers monitor crop health, optimize irrigation, and predict yields with precision — 
              all through a simple mobile app in your local language.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" className="bg-krishi-green-dark hover:bg-krishi-green-dark/90">
                Download App
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-krishi-blue text-krishi-blue hover:bg-krishi-blue/10">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-krishi-green-dark flex items-center justify-center text-white">
                  <span className="text-xs font-bold">+1k</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Join over 1,000 farmers already using KrishiVerse
              </p>
            </div>
          </div>
          <div className="lg:pl-10 flex justify-center">
            <div className="relative w-full max-w-[500px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-krishi-green-light/20 rounded-full blur-3xl" />
              <img 
                src="/farmer-app.jpg" 
                alt="Farmer using KrishiVerse app"
                className="relative z-10 rounded-lg shadow-2xl border-4 border-white w-full h-auto object-cover animate-float"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-lg p-4 shadow-lg z-20 max-w-[200px]">
                <div className="text-krishi-green-dark font-bold text-lg">+27%</div>
                <div className="text-sm text-gray-600">Average yield increase with KrishiVerse</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
