import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-slate-900 text-white flex items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Kenya Tradex
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your Trusted Partner In Global Logistics
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6">
                Kenya Tradex is a leading logistics provider in Kenya, offering
                a comprehensive range of services to streamline your
                international trade operations. We are duly registered with the
                Registrar of Companies under the Kenyan Companies Act Cap 486.
              </p>
              <p className="text-gray-600 mb-6">
                Currently, Kenya TradeX serve regional and international markets
                focusing on satisfying needs in East Africa and the greater
                Great Lakes Region. Some of the Key Markets include; Kenya,
                Uganda, Tanzania, Rwanda, Burundi and Southern Sudan.
              </p>
              <p className="text-gray-600">
                "We provide our clientele a one stop shop for all logistical
                needs related to freight movement across the world."
              </p>
            </div>
            <div className="bg-slate-100 h-[400px] rounded-lg">
              {/* Image placeholder */}
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Customs Clearance</h3>
                  <p className="text-gray-600">
                    Expert handling of import and export procedures with all
                    relevant authorities.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Transportation</h3>
                  <p className="text-gray-600">
                    Efficient road, rail, and sea freight solutions across East
                    Africa.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Warehousing</h3>
                  <p className="text-gray-600">
                    Secure storage facilities for your goods with expert
                    handling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Kenya Tradex
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">
                    Expertise and Experience
                  </h3>
                  <p className="text-gray-600">
                    Our team of logistics professionals has a proven track
                    record of success.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Global Network</h3>
                  <p className="text-gray-600">
                    Strong partnerships with international logistics providers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">
                    Customized Solutions
                  </h3>
                  <p className="text-gray-600">
                    We tailor our services to meet your specific requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Contact us today to discuss your logistics needs and discover how
            Kenya Tradex can help your business thrive.
          </p>
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </main>
  );
}
