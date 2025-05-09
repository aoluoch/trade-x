import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  FileText,
  Plane,
  Ship,
  Building2,
  Package,
  ArrowRight,
  Phone,
  CheckCircle,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/home/service-card";
import TestimonialCard from "@/components/home/testimonial-card";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KENYA TRADEX: YOUR TRUSTED PARTNER FOR LOGISTICS IN KENYA
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Welcome to Kenya Tradex, your gateway to seamless logistics
            solutions in East Africa. As a leading customs clearance and
            logistics company in Kenya, we provide comprehensive services to
            streamline your trade operations efficiently.
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600"
            >
              <Link href="/contact">Get A Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            WHAT WE OFFER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Truck className="h-10 w-10" />}
              title="Clearing & Forwarding"
              description="Our good relationship with leading shipping lines have enabled us come up with a facility and makes clearing and transportation of cargo as easy as abc"
              href="/services#clearing"
            />
            <ServiceCard
              icon={<FileText className="h-10 w-10" />}
              title="Customs Consultancy"
              description="Struggling with the East African Community Customs Law? Do you have issues with the KRA and don't know where to begin?"
              href="/services#consultancy"
            />
            <ServiceCard
              icon={<Plane className="h-10 w-10" />}
              title="Air Freight"
              description="We pride in uplifting our clients freight within 24 hrs to a maximum 48 hours after packing, subject to availability of all necessary documentation"
              href="/services#air-freight"
            />
            <ServiceCard
              icon={<Ship className="h-10 w-10" />}
              title="Sea Freight"
              description="We pride in uplifting our clients freight within 24 hrs to a maximum 48 hours after packing, subject to availability of all necessary documentation"
              href="/services#sea-freight"
            />
            <ServiceCard
              icon={<Truck className="h-10 w-10" />}
              title="Transportation"
              description="We pride in our team of highly qualified driver and a fleet of over 15 trucks that meets high international safety standards. All our truck have GPRS tracking systems"
              href="/services#transportation"
            />
            <ServiceCard
              icon={<Building2 className="h-10 w-10" />}
              title="Warehousing"
              description="We have partnered with experts of warehousing in Mombasa to provide our clients who for some reason are not ready for cargo to be delivered with the best warehousing facility"
              href="/services#warehousing"
            />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">WHO WE ARE</h2>
              <p className="text-lg mb-6">
                Kenya Tradex is a leading logistics provider in Kenya, offering
                a comprehensive range of services to streamline your
                international trade operations. We are duly registered with the
                Registrar of Companies under the Kenyan Companies Act Cap 486.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="bg-slate-200 h-[400px]">
              {/* Image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What People Say About Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="ROBANNE TRADERS"
              company="Electronics Shop"
              location="Kampala, Uganda"
              testimonial="Thank you for handling our containers since 2014 with no major issues at all. Happy to work you."
              contact="Tel: +256 / +254 20 2301015"
            />
            <TestimonialCard
              name="MWALO PAPER DISTRIBUTORS"
              location="Kampala, Uganda"
              testimonial="Honest, Efficient and Customer friendly Company. They will always deliver. Recommended."
              contact="Tel +256 414 250981, Mob: +254 722988388"
            />
            <TestimonialCard
              name="BHAVIN MOTORS"
              location="Mombasa, Kenya"
              testimonial="A very professional Company that takes good care of her customers. Happy to clear our cars with you."
              contact="Tel: +254 724 750 590"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Partner Together</h2>
          <p className="text-lg mb-8">
            Contact us today to discuss your logistics needs and discover how
            Kenya Tradex can help your business thrive.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600"
          >
            <Link href="/contact">Get A Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
