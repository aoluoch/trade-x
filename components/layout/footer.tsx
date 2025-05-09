import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white">KENYA</span>
              <span className="text-2xl font-bold text-orange-500">TRADEX</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner for logistics solutions in East Africa and
              beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <span className="text-gray-400">
                  TRADEX HOUSE - Liwatoni Road, Off Moi Avenue, Opp Cosmos
                  Motors, PO BOX 87284—80100, MOMBASA, KENYA
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">+254 721 59 62 59</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-gray-400">info@kenyatradex.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Saturday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Kenya Tradex. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Developed by Marlitech Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
