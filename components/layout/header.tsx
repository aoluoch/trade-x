"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[#032D60]">KENYA</span>
            <span className="text-2xl font-bold text-orange-500">TRADEX</span>
          </Link>
        </div>
        <nav className="flex-1">
          <ul className="flex space-x-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-orange-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span className="text-sm">+254 721 59 62 59</span>
          </div>
          <Button asChild>
            <Link href="/contact">Get A Quote</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
