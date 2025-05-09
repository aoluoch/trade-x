import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Truck, Package, Globe, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ServiceCard from "@/components/home/service-card";
import TestimonialCard from "@/components/home/testimonial-card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] bg-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70">
          <Image 
            src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg" 
            alt="Logistics in Kenya"
            fill 
            priority
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
              Your Trusted Partner for Logistics in Kenya
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Comprehensive logistics solutions to streamline your supply chain 
              and ensure smooth operations across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#FFA500] hover:bg-[#E59400] text-black font-semibold text-base px-6 py-6">
                Get a Quote
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 flex items-center gap-2 text-base px-6 py-6">
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of logistics services to meet all your 
              transportation and freight needs in Kenya and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard 
              icon={<Truck className="h-10 w-10" />}
              title="Clearing & Forwarding"
              description="Expert handling of all customs documentation and procedures for smooth import and export operations."
              href="/services#clearing"
            />
            <ServiceCard 
              icon={<Shield className="h-10 w-10" />}
              title="Customs Consultancy"
              description="Professional advice on customs regulations, tariff classifications, and compliance requirements."
              href="/services#consultancy"
            />
            <ServiceCard 
              icon={<Globe className="h-10 w-10" />}
              title="Air Freight"
              description="Fast and reliable air freight services for time-sensitive shipments worldwide."
              href="/services#air-freight"
            />
            <ServiceCard 
              icon={<Package className="h-10 w-10" />}
              title="Sea Freight"
              description="Cost-effective sea freight solutions for bulk cargo and containerized shipments."
              href="/services#sea-freight"
            />
            <ServiceCard 
              icon={<Truck className="h-10 w-10" />}
              title="Transportation"
              description="Comprehensive road transportation services with a modern and well-maintained fleet."
              href="/services#transportation"
            />
            <ServiceCard 
              icon={<Package className="h-10 w-10" />}
              title="Warehousing"
              description="Secure storage facilities with inventory management and distribution services."
              href="/services#warehousing"
            />
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg" 
                alt="About Kenya Tradex" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">About Kenya Tradex</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Kenya Tradex is a leading logistics provider with over 15 years of experience 
                in the East African region. We pride ourselves on delivering reliable, 
                efficient, and cost-effective logistics solutions to businesses of all sizes.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FFA500]" />
                  <span>Experienced team of logistics professionals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FFA500]" />
                  <span>Strategic locations throughout East Africa</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FFA500]" />
                  <span>Modern fleet and equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-[#FFA500]" />
                  <span>Committed to customer satisfaction</span>
                </li>
              </ul>
              <Button variant="outline" className="flex items-center gap-2">
                <span>Read More</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
              about their experience working with Kenya Tradex.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="Kenya Tradex has been instrumental in streamlining our supply chain operations. Their team is responsive, professional, and always delivers on time."
              author="John Mwangi"
              company="Nairobi Manufacturing Ltd"
            />
            <TestimonialCard 
              quote="We've been working with Kenya Tradex for over 5 years now, and their services have been consistently excellent. I highly recommend them for any logistics needs."
              author="Sarah Ochieng"
              company="East African Imports"
            />
            <TestimonialCard 
              quote="The customs consultancy services provided by Kenya Tradex helped us navigate complex regulations and save significantly on import duties."
              author="Robert Kimani"
              company="Summit Electronics"
            />
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              <span>View All Testimonials</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#032D60] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to streamline your logistics?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us today for a free consultation and quote. Our team is ready to help you
            optimize your supply chain and reduce logistics costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#FFA500] hover:bg-[#E59400] text-black font-semibold">
              Get a Quote
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}