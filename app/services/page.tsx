import Image from "next/image";
import { Truck, Shield, Globe, Package, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70">
          <Image 
            src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg" 
            alt="Kenya Tradex Services" 
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Comprehensive logistics solutions tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Logistics Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kenya Tradex offers a wide range of logistics services designed to optimize 
              your supply chain and ensure smooth operations.
            </p>
          </div>

          <Tabs defaultValue="clearing" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
              <TabsTrigger value="clearing" id="clearing">Clearing & Forwarding</TabsTrigger>
              <TabsTrigger value="consultancy" id="consultancy">Customs Consultancy</TabsTrigger>
              <TabsTrigger value="air-freight" id="air-freight">Air Freight</TabsTrigger>
              <TabsTrigger value="sea-freight" id="sea-freight">Sea Freight</TabsTrigger>
              <TabsTrigger value="transportation" id="transportation">Transportation</TabsTrigger>
              <TabsTrigger value="warehousing" id="warehousing">Warehousing</TabsTrigger>
              <TabsTrigger value="consolidation" id="consolidation">Consolidation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="clearing" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg" 
                    alt="Clearing & Forwarding" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Clearing & Forwarding</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our clearing and forwarding services ensure smooth passage of your goods 
                    through customs and across international borders. We handle all documentation, 
                    compliance requirements, and procedures to expedite the clearance process.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Import & Export Documentation</h4>
                      <p className="text-muted-foreground">Comprehensive preparation and processing of all required documents.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Customs Clearance</h4>
                      <p className="text-muted-foreground">Expert handling of customs procedures for timely clearance.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Duty & Tax Management</h4>
                      <p className="text-muted-foreground">Accurate calculation and management of duties and taxes.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="consultancy" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
                    alt="Customs Consultancy" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Customs Consultancy</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our customs consultancy services provide expert guidance on complex customs 
                    regulations, tariff classifications, and compliance requirements. We help you 
                    navigate the regulatory landscape and optimize your customs procedures.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Regulatory Compliance</h4>
                      <p className="text-muted-foreground">Ensuring adherence to all customs laws and regulations.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Tariff Classification</h4>
                      <p className="text-muted-foreground">Accurate classification of goods for proper duty assessment.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Customs Valuation</h4>
                      <p className="text-muted-foreground">Expert advice on customs valuation methods and requirements.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="air-freight" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg" 
                    alt="Air Freight" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Air Freight</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our air freight services provide fast and reliable transportation for 
                    time-sensitive shipments. We work with leading airlines to ensure your 
                    cargo reaches its destination quickly and safely.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Express Delivery</h4>
                      <p className="text-muted-foreground">Fast delivery options for time-critical shipments.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Global Network</h4>
                      <p className="text-muted-foreground">Connections with major airlines for worldwide coverage.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Specialized Handling</h4>
                      <p className="text-muted-foreground">Special care for delicate, valuable, or perishable goods.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sea-freight" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg" 
                    alt="Sea Freight" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Sea Freight</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our sea freight services offer cost-effective solutions for transporting 
                    large volumes of cargo. We handle both FCL (Full Container Load) and LCL 
                    (Less than Container Load) shipments to meet your specific needs.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">FCL & LCL Shipping</h4>
                      <p className="text-muted-foreground">Flexible options for different cargo volumes.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Port Operations</h4>
                      <p className="text-muted-foreground">Efficient handling at major ports in East Africa.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Project Cargo</h4>
                      <p className="text-muted-foreground">Specialized solutions for oversized and heavy shipments.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="transportation" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" 
                    alt="Transportation" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Transportation</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our transportation services provide reliable road freight solutions 
                    throughout East Africa. With a modern fleet of vehicles and experienced 
                    drivers, we ensure safe and timely delivery of your cargo.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Modern Fleet</h4>
                      <p className="text-muted-foreground">Well-maintained vehicles for safe and reliable transport.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Regional Coverage</h4>
                      <p className="text-muted-foreground">Extensive network across East Africa.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">GPS Tracking</h4>
                      <p className="text-muted-foreground">Real-time tracking of all shipments for enhanced security.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="warehousing" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/4481323/pexels-photo-4481323.jpeg" 
                    alt="Warehousing" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Warehousing</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our warehousing services provide secure storage facilities with 
                    comprehensive inventory management and distribution capabilities. 
                    We offer both short-term and long-term storage solutions.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Secure Facilities</h4>
                      <p className="text-muted-foreground">24/7 security and monitoring of all stored goods.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Inventory Management</h4>
                      <p className="text-muted-foreground">Real-time tracking and management of inventory.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Distribution Services</h4>
                      <p className="text-muted-foreground">Efficient pick-and-pack services for order fulfillment.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="consolidation" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg" 
                    alt="Consolidation" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Consolidation</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Our consolidation services combine multiple smaller shipments into 
                    one larger shipment, reducing transportation costs and improving 
                    efficiency. This is an ideal solution for smaller businesses.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Cost Efficiency</h4>
                      <p className="text-muted-foreground">Reduced shipping costs through combined shipments.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Simplified Logistics</h4>
                      <p className="text-muted-foreground">One shipment, one set of documents, one tracking number.</p>
                    </div>
                    <div className="border-l-4 border-[#FFA500] pl-4">
                      <h4 className="font-semibold">Reduced Transit Time</h4>
                      <p className="text-muted-foreground">Faster delivery with optimized routing and handling.</p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-[#032D60] hover:bg-[#022348] text-white">
                    Get a Quote
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide specialized logistics solutions for a wide range of industries, 
              tailored to their unique requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Streamlined supply chain solutions for manufacturing companies, 
                  ensuring timely delivery of raw materials and finished products.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Agriculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized handling of agricultural products, including temperature-controlled 
                  transport for perishable goods.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Construction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reliable transportation of construction materials and equipment to 
                  project sites across East Africa.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  End-to-end supply chain solutions for retailers, including 
                  warehousing, distribution, and last-mile delivery.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transportation of equipment and materials for energy projects, 
                  including specialized handling for sensitive components.
                </p>
              </CardContent>
            </Card>
            
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Temperature-controlled transport and secure handling of 
                  pharmaceuticals and medical equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#032D60] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to optimize your logistics?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us today to discuss your specific requirements and discover 
            how Kenya Tradex can help streamline your supply chain.
          </p>
          <Button className="bg-[#FFA500] hover:bg-[#E59400] text-black font-semibold">
            Get a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}