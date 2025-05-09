import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import TestimonialCard from "@/components/home/testimonial-card";

const testimonials = [
  {
    name: "ROBANNE TRADERS",
    company: "Electronics Shop",
    location: "Kampala, Uganda",
    testimonial:
      "Thank you for handling our containers since 2014 with no major issues at all. Happy to work you.",
    contact: "Tel: +256 / +254 20 2301015",
  },
  {
    name: "MWALO PAPER DISTRIBUTORS",
    location: "Kampala, Uganda",
    testimonial:
      "Honest, Efficient and Customer friendly Company. They will always deliver. Recommended.",
    contact: "Tel +256 414 250981, Mob: +254 722988388",
  },
  {
    name: "BHAVIN MOTORS",
    location: "Mombasa, Kenya",
    testimonial:
      "A very professional Company that takes good care of her customers. Happy to clear our cars with you.",
    contact: "Tel: +254 724 750 590",
  },
  {
    name: "MAGARI EAST AFRICA",
    location: "Nairobi, Kenya",
    testimonial:
      "Kenya Tradex is an effective & efficient Company. Always willing to go an extra mile for us, anytime. Keep it up!",
    contact: "Tel: +254 790 140019",
  },
  {
    name: "JERRY O",
    location: "United States of America",
    testimonial:
      "You saved my car from storage costs after I had been conned. Wish I had known you earlier! Thank you.",
    contact: "Tel: +1 817 566 5937",
  },
  {
    name: "CREST FOAM (U) LTD",
    location: "Kampala, Uganda",
    testimonial:
      "You've got our back. Always at peace when you are handling our work in Mombasa.",
    contact: "James B. Katalihwa Sales Manager +256 772 500 188",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-slate-900 text-white flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            What Our Clients Say About Our Services
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                location={testimonial.location}
                testimonial={testimonial.testimonial}
                contact={testimonial.contact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Join Our Satisfied Clients
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the same level of excellence in logistics services that
            has earned us the trust of businesses across East Africa and beyond.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
