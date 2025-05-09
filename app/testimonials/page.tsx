import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "Kenya Tradex has been instrumental in streamlining our supply chain operations. Their team is responsive, professional, and always delivers on time. We've seen significant improvements in our logistics efficiency since partnering with them.",
    author: "John Mwangi",
    position: "Supply Chain Manager",
    company: "Nairobi Manufacturing Ltd",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  },
  {
    id: 2,
    quote: "We've been working with Kenya Tradex for over 5 years now, and their services have been consistently excellent. Their attention to detail and commitment to customer satisfaction sets them apart from other logistics providers in the region.",
    author: "Sarah Ochieng",
    position: "Operations Director",
    company: "East African Imports",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    id: 3,
    quote: "The customs consultancy services provided by Kenya Tradex helped us navigate complex regulations and save significantly on import duties. Their expertise in customs procedures is unmatched in the industry.",
    author: "Robert Kimani",
    position: "CEO",
    company: "Summit Electronics",
    image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg",
  },
  {
    id: 4,
    quote: "Kenya Tradex has been a reliable partner for our transportation needs. Their modern fleet and professional drivers ensure our products reach customers safely and on time. Highly recommended!",
    author: "Elizabeth Wanjiru",
    position: "Logistics Coordinator",
    company: "Kenyan Fresh Produce",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  },
  {
    id: 5,
    quote: "The warehousing solutions provided by Kenya Tradex have significantly improved our inventory management. Their state-of-the-art facilities and efficient systems have helped us reduce costs and improve customer satisfaction.",
    author: "James Omondi",
    position: "Warehouse Manager",
    company: "Central Distributors Ltd",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
  {
    id: 6,
    quote: "When it comes to air freight, Kenya Tradex delivers exceptional service. They've handled our time-sensitive shipments with precision and care, ensuring our products reach international markets quickly and safely.",
    author: "Grace Mutinda",
    position: "Export Manager",
    company: "Kenyan Artisans Collective",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  },
  {
    id: 7,
    quote: "The team at Kenya Tradex went above and beyond to ensure our project materials arrived on schedule despite challenging circumstances. Their problem-solving abilities and dedication to customer service are truly impressive.",
    author: "Daniel Njoroge",
    position: "Project Manager",
    company: "Simba Construction",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
  },
  {
    id: 8,
    quote: "Kenya Tradex has been our trusted logistics partner for our oil and gas projects. Their experience in handling specialized equipment and adherence to safety standards has been crucial to our operations.",
    author: "Patricia Achieng",
    position: "Logistics Director",
    company: "East African Energy Solutions",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
  },
  {
    id: 9,
    quote: "The consolidation services offered by Kenya Tradex have helped our small business reduce shipping costs significantly. Their attention to detail and careful handling of our products has been exceptional.",
    author: "Michael Waweru",
    position: "Owner",
    company: "Nairobi Craft Exports",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70">
          <Image 
            src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg" 
            alt="Client Testimonials" 
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Discover what our clients say about their experience working with Kenya Tradex.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what some of our satisfied 
              clients have to say about working with Kenya Tradex.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#032D60] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join our satisfied clients</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Experience the Kenya Tradex difference for yourself. Contact us today 
            to discuss how we can help with your logistics needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#FFA500] hover:bg-[#E59400] text-black font-semibold px-6 py-3 rounded-md">
              Get a Quote
            </button>
            <button className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-3 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: {
    id: number;
    quote: string;
    author: string;
    position: string;
    company: string;
    image: string;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <QuoteIcon className="h-8 w-8 text-[#FFA500] mb-4" />
        <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
      </CardContent>
      <CardFooter className="flex items-center gap-4 border-t pt-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image 
            src={testimonial.image} 
            alt={testimonial.author} 
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-bold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
        </div>
      </CardFooter>
    </Card>
  );
}