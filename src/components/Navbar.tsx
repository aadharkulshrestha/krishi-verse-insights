
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-krishi-green-dark">
              Krishi<span className="text-krishi-blue">Verse</span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-krishi-green-dark transition-colors">
            Features
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-krishi-green-dark transition-colors">
            Benefits
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-krishi-green-dark transition-colors">
            How It Works
          </a>
          <a href="#vision" className="text-sm font-medium hover:text-krishi-green-dark transition-colors">
            Our Vision
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-krishi-blue text-krishi-blue hover:bg-krishi-blue hover:text-white">
            Log In
          </Button>
          <Button className="bg-krishi-amber hover:bg-krishi-amber/90 text-foreground">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-200 p-4 md:hidden z-10">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-sm font-medium hover:text-krishi-green-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#benefits" 
                className="text-sm font-medium hover:text-krishi-green-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Benefits
              </a>
              <a 
                href="#how-it-works" 
                className="text-sm font-medium hover:text-krishi-green-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#vision" 
                className="text-sm font-medium hover:text-krishi-green-dark transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Vision
              </a>
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" className="border-krishi-blue text-krishi-blue hover:bg-krishi-blue hover:text-white w-full">
                  Log In
                </Button>
                <Button className="bg-krishi-amber hover:bg-krishi-amber/90 text-foreground w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
