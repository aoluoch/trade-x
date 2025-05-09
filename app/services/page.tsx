import Image from "next/image";
import { Truck, FileText, Plane, Ship, Package, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    icon: Truck,
    title: "Clearing & Forwarding",
    description:
      "Our good relationship with leading shipping lines have enabled us come up with a facility and makes clearing and transportation of cargo as easy as abc",
    features: [
      "Custom documentation handling",
      "Port clearance services",
      "Cargo tracking",
      "Documentation compliance",
    ],
  },
  {
    icon: FileText,
    title: "Customs Consultancy",
    description:
      "Struggling with the East African Community Customs Law? Do you have issues with the KRA and don't know where to begin?",
    features: [
      "Tax advisory services",
      "Customs regulations compliance",
      "Documentation review",
      "Legal consultation",
    ],
  },
  {
    icon: Plane,
    title: "Air Freight",
    description:
      "We pride in uplifting our clients freight within 24 hrs to a maximum 48 hours after packing, subject to availability of all necessary documentation",
    features: [
      "Express air cargo",
      "Door-to-door delivery",
      "Temperature-controlled shipping",
      "Real-time tracking",
    ],
  },
  {
    icon: Ship,
    title: "Sea Freight",
    description:
      "We pride in uplifting our clients freight within 24 hrs to a maximum 48 hours after packing, subject to availability of all necessary documentation",
    features: [
      "FCL & LCL shipping",
      "Port-to-port service",
      "Container tracking",
      "Custom clearance",
    ],
  },
  {
    icon: Truck,
    title: "Transportation",
    description:
      "We pride in our team of highly qualified driver and a fleet of over 15 trucks that meets high international safety standards. All our truck have GPRS tracking systems",
    features: [
      "GPS tracked fleet",
      "Nationwide delivery",
      "Cross-border transport",
      "Specialized cargo handling",
    ],
  },
  {
    icon: Building2,
    title: "Warehousing",
    description:
      "We have partnered with experts of warehousing in Mombasa to provide our clients who for some reason are not ready for cargo to be delivered with the best warehousing facility",
    features: [
      "Secure storage facilities",
      "Inventory management",
      "Climate-controlled storage",
      "24/7 surveillance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-slate-900 text-white flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive Logistics Solutions for Your Business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-orange-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Logistics Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements and discover
            how our comprehensive logistics solutions can benefit your business.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600"
          >
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
