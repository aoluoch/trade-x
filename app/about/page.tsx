import Image from "next/image";
import { CheckCircle, Award, Users, Clock, Target } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70">
          <Image 
            src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg" 
            alt="About Kenya Tradex" 
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Learn more about Kenya Tradex, our history, mission, and values.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Kenya Tradex is a leading logistics and supply chain management company 
                with over 15 years of experience operating throughout East Africa. Since 
                our founding in 2008, we have grown to become one of the most trusted 
                names in the logistics industry in Kenya.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Our comprehensive range of services includes clearing and forwarding, 
                customs consultancy, air and sea freight, transportation, warehousing, 
                and consolidation. We pride ourselves on delivering reliable, efficient, 
                and cost-effective logistics solutions to businesses of all sizes.
              </p>
              <p className="text-lg text-muted-foreground">
                With a team of experienced professionals, strategic locations throughout 
                East Africa, and a modern fleet of vehicles, we are well-equipped to 
                handle all your logistics needs with precision and care.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image 
                src="https://images.pexels.com/photos/4481531/pexels-photo-4481531.jpeg" 
                alt="Kenya Tradex Team" 
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guiding principles that drive everything we do at Kenya Tradex.
            </p>
          </div>

          <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="mt-6 p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-4">
                To provide innovative, reliable, and cost-effective logistics solutions 
                that help our clients optimize their supply chains and achieve their 
                business objectives.
              </p>
              <p className="text-lg text-muted-foreground">
                We strive to exceed customer expectations through operational excellence, 
                industry expertise, and a steadfast commitment to delivering value in 
                everything we do.
              </p>
            </TabsContent>
            <TabsContent value="vision" className="mt-6 p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground mb-4">
                To be the leading logistics provider in East Africa, recognized for our 
                operational excellence, innovative solutions, and unwavering commitment 
                to customer satisfaction.
              </p>
              <p className="text-lg text-muted-foreground">
                We aim to set the standard for logistics services in the region, continually 
                evolving to meet the changing needs of our clients and the industry.
              </p>
            </TabsContent>
            <TabsContent value="values" className="mt-6 p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FFA500] mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Integrity</h4>
                    <p className="text-muted-foreground">We conduct our business with the highest ethical standards, transparency, and honesty.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FFA500] mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Excellence</h4>
                    <p className="text-muted-foreground">We strive for excellence in all aspects of our operations, continuously improving our services.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FFA500] mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Customer Focus</h4>
                    <p className="text-muted-foreground">We put our customers at the center of everything we do, building lasting relationships based on trust.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#FFA500] mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">Innovation</h4>
                    <p className="text-muted-foreground">We embrace innovation and technological advancement to enhance our service delivery.</p>
                  </div>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Kenya Tradex?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart from other logistics providers in the region.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="h-full">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 mx-auto text-[#FFA500] mb-4" />
                <h3 className="text-xl font-bold">15+ Years Experience</h3>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Over fifteen years of experience in logistics and supply chain management in East Africa.
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 mx-auto text-[#FFA500] mb-4" />
                <h3 className="text-xl font-bold">Expert Team</h3>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                A team of highly skilled professionals with deep industry knowledge and expertise.
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 mx-auto text-[#FFA500] mb-4" />
                <h3 className="text-xl font-bold">Timely Delivery</h3>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Commitment to on-time delivery and strict adherence to schedules.
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 mx-auto text-[#FFA500] mb-4" />
                <h3 className="text-xl font-bold">Tailored Solutions</h3>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">
                Customized logistics solutions designed to meet your specific business needs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to common questions about our services and operations.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-medium">
                  What areas in Kenya do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We operate throughout Kenya, with a particular focus on major cities and ports including Nairobi, Mombasa, Kisumu, and Eldoret. We also serve neighboring countries in East Africa.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-medium">
                  How do you ensure the safety of goods during transit?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We implement robust security measures including GPS tracking for all vehicles, secure packaging, regular maintenance of our fleet, and comprehensive insurance coverage for all shipments.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-medium">
                  What types of goods can you transport?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We handle a wide range of goods including general cargo, perishables, hazardous materials (with proper documentation), construction materials, and specialized equipment. Contact us for specific requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-medium">
                  How do you handle customs clearance for imports?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Our experienced team handles all aspects of customs clearance, including documentation preparation, duty calculation, classification of goods, and liaison with customs authorities to ensure smooth and timely clearance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-medium">
                  What insurance coverage do you provide?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We provide comprehensive insurance coverage for all shipments. The specific coverage depends on the type of goods, mode of transport, and destination. We can provide detailed information based on your specific needs.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}