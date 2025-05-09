import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#032D60] dark:bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Kenya Tradex</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              Your trusted partner for logistics in Kenya, providing comprehensive
              solutions for all your transportation and freight needs.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 dark:text-gray-400">Clearing & Forwarding</li>
              <li className="text-gray-300 dark:text-gray-400">Customs Consultancy</li>
              <li className="text-gray-300 dark:text-gray-400">Air Freight</li>
              <li className="text-gray-300 dark:text-gray-400">Sea Freight</li>
              <li className="text-gray-300 dark:text-gray-400">Transportation</li>
              <li className="text-gray-300 dark:text-gray-400">Warehousing</li>
              <li className="text-gray-300 dark:text-gray-400">Consolidation</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-300 dark:text-gray-400 mt-0.5" />
                <span className="text-gray-300 dark:text-gray-400">
                  123 Mombasa Road, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300 dark:text-gray-400" />
                <span className="text-gray-300 dark:text-gray-400">+254 700 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300 dark:text-gray-400" />
                <span className="text-gray-300 dark:text-gray-400">info@kenyatradex.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <Button className="bg-white text-[#032D60] hover:bg-gray-200 dark:bg-white dark:text-slate-900">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-300 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Kenya Tradex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}