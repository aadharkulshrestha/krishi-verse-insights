
import { SectionTitle } from "@/components/ui/section-title";
import { Satellite, Cloud, AlertTriangle, Smartphone, BarChart, Droplet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      icon: <Satellite className="h-8 w-8 text-krishi-blue" />,
      title: "Satellite-Based Monitoring",
      description: "Track crop health, NDVI, moisture stress and disease risk using advanced satellite imagery"
    },
    {
      icon: <Droplet className="h-8 w-8 text-krishi-blue" />,
      title: "Smart Irrigation",
      description: "Weather-integrated scheduling to optimize water usage and prevent over/under watering"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-krishi-blue" />,
      title: "Local Language App",
      description: "Easy-to-use mobile application with voice assistant in your local language"
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-krishi-blue" />,
      title: "Real-Time Alerts",
      description: "Instant notifications for pest outbreaks, nutrient deficiency, and low productivity zones"
    },
    {
      icon: <BarChart className="h-8 w-8 text-krishi-blue" />,
      title: "Yield Forecasting",
      description: "AI-powered predictions to help plan harvests and estimate income"
    },
    {
      icon: <Cloud className="h-8 w-8 text-krishi-blue" />,
      title: "Weather Integration",
      description: "Local weather data and forecasts to plan farming activities effectively"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <SectionTitle subtext="Core Features">
          Technology That Transforms Farming
        </SectionTitle>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-md bg-krishi-cream">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
