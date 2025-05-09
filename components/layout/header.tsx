"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 font-bold text-xl text-primary"
            >
              <span className="hidden sm:inline-block">Kenya Tradex</span>
              <span className="sm:hidden">KT</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <div className="hidden md:block">
              <Button size="sm" className="bg-[#032D60] hover:bg-[#022348] text-white">
                Get a Quote
              </Button>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </Button>
            </div>
            
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="space-y-2 pt-4">
                    <Button className="w-full bg-[#032D60] hover:bg-[#022348] text-white">
                      Get a Quote
                    </Button>
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>Call Now</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}