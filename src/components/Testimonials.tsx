
import { SectionTitle } from "@/components/ui/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "KrishiVerse has transformed how I manage my 5-acre farm. The early pest detection saved my entire tomato crop last season!",
      author: "Rajesh Kumar",
      location: "Punjab, India",
      image: "https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?w=800&auto=format&fit=crop&q=80",
      fallbackImage: "/placeholder.svg",
      role: "Small-scale Farmer"
    },
    {
      quote: "The irrigation recommendations have helped me reduce water usage by 25%. My yields are actually better with less water!",
      author: "Maria Gonzalez",
      location: "Jalisco, Mexico",
      image: "https://images.unsplash.com/photo-1595181965407-2a44631a3337?w=800&auto=format&fit=crop&q=80",
      fallbackImage: "/placeholder.svg",
      role: "Organic Farmer"
    },
    {
      quote: "The local language support means everyone on my farm can use it. The satellite insights have made decision-making so much clearer.",
      author: "Wei Chen",
      location: "Sichuan, China",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=80",
      fallbackImage: "/placeholder.svg",
      role: "Agricultural Cooperative Manager"
    },
    {
      quote: "Since using KrishiVerse, my fertilizer costs have gone down 30% as I'm applying exactly what's needed, where it's needed.",
      author: "Aisha Nkosi",
      location: "Tanzania",
      image: "https://images.unsplash.com/photo-1589923188900-85unlike20-a712d60e87336?w=800&auto=format&fit=crop&q=80",
      fallbackImage: "/placeholder.svg",
      role: "Mid-size Farm Owner"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <SectionTitle subtext="Success Stories">
          Farmers Thriving with KrishiVerse
        </SectionTitle>
        
        <div className="mt-12">
          <Carousel
            opts={{
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-shadow duration-300">
                      <div className="relative">
                        <AspectRatio ratio={16 / 9}>
                          <img 
                            src={testimonial.image}
                            alt={`${testimonial.author}'s farm`}
                            className="object-cover w-full h-full"
                            onError={(e) => {
                              // Fallback to placeholder if image fails to load
                              e.currentTarget.src = testimonial.fallbackImage;
                            }}
                          />
                        </AspectRatio>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <CardContent className="relative p-6">
                        <div className="mb-4">
                          <svg 
                            className="h-8 w-8 text-krishi-green-light opacity-40"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>
                        <p className="text-base mb-6">{testimonial.quote}</p>
                        <div className="flex items-center">
                          <div className="ml-2">
                            <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                            <p className="text-xs text-krishi-blue">{testimonial.role}, {testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-center gap-4">
              <CarouselPrevious className="relative static transform-none bg-krishi-green-light text-white hover:bg-krishi-green-dark hover:text-white" />
              <CarouselNext className="relative static transform-none bg-krishi-green-light text-white hover:bg-krishi-green-dark hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
