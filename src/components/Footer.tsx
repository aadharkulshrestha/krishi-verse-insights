
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-krishi-green-dark">
                Krishi<span className="text-krishi-blue">Verse</span>
              </span>
            </div>
            <p className="mt-3 text-muted-foreground">From satellites to soil — your farm's new best friend.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-krishi-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-krishi-blue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-krishi-blue">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-krishi-blue">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-krishi-green-dark">Features</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-krishi-green-dark">Benefits</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Case Studies</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">About Us</a></li>
              <li><a href="#vision" className="text-muted-foreground hover:text-krishi-green-dark">Our Vision</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">API</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-krishi-green-dark">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KrishiVerse. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-krishi-green-dark">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-krishi-green-dark">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-krishi-green-dark">
              <div className="flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <span>English</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
