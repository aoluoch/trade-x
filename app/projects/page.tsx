import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "road", name: "Road Construction" },
  { id: "energy", name: "Energy" },
  { id: "oil", name: "Oil & Gas" },
  { id: "infrastructure", name: "Infrastructure" },
];

const projects = [
  {
    id: 1,
    title: "Nairobi-Nakuru Highway Expansion",
    category: "road",
    image: "https://images.pexels.com/photos/3762285/pexels-photo-3762285.jpeg",
    description: "Transportation of construction materials and equipment for the major highway expansion project connecting Nairobi and Nakuru.",
    client: "Kenya National Highways Authority",
    duration: "18 months",
  },
  {
    id: 2,
    title: "Lake Turkana Wind Power Project",
    category: "energy",
    image: "https://images.pexels.com/photos/2499773/pexels-photo-2499773.jpeg",
    description: "Logistics support for the Lake Turkana Wind Power project, the largest wind farm in Africa, including transportation of wind turbines and components.",
    client: "Lake Turkana Wind Power Ltd",
    duration: "24 months",
  },
  {
    id: 3,
    title: "Lokichar-Lamu Pipeline",
    category: "oil",
    image: "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg",
    description: "Transportation and logistics services for the construction of the crude oil pipeline from Lokichar to Lamu Port.",
    client: "Kenya Pipeline Company",
    duration: "36 months",
  },
  {
    id: 4,
    title: "Thwake Multipurpose Dam",
    category: "infrastructure",
    image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg",
    description: "Delivery of construction materials and equipment for the Thwake Multipurpose Dam project in Makueni County.",
    client: "Ministry of Water and Irrigation",
    duration: "30 months",
  },
  {
    id: 5,
    title: "Olkaria Geothermal Power Plant",
    category: "energy",
    image: "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    description: "Transportation of specialized equipment for the expansion of the Olkaria Geothermal Power Plant in Naivasha.",
    client: "Kenya Electricity Generating Company",
    duration: "24 months",
  },
  {
    id: 6,
    title: "Dongo Kundu Bypass",
    category: "road",
    image: "https://images.pexels.com/photos/1061575/pexels-photo-1061575.jpeg",
    description: "Logistics support for the construction of the Dongo Kundu Bypass in Mombasa, including transportation of construction materials.",
    client: "Kenya Urban Roads Authority",
    duration: "24 months",
  },
  {
    id: 7,
    title: "Kisumu Port Rehabilitation",
    category: "infrastructure",
    image: "https://images.pexels.com/photos/1544376/pexels-photo-1544376.jpeg",
    description: "Transportation of equipment and materials for the rehabilitation of Kisumu Port on Lake Victoria.",
    client: "Kenya Ports Authority",
    duration: "18 months",
  },
  {
    id: 8,
    title: "Lamu Port Construction",
    category: "infrastructure",
    image: "https://images.pexels.com/photos/3780106/pexels-photo-3780106.jpeg",
    description: "Logistics services for the construction of Lamu Port, including transportation of construction materials and equipment.",
    client: "LAPSSET Corridor Development Authority",
    duration: "36 months",
  },
  {
    id: 9,
    title: "Menengai Geothermal Project",
    category: "energy",
    image: "https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg",
    description: "Transportation of drilling equipment and materials for the Menengai Geothermal Project in Nakuru County.",
    client: "Geothermal Development Company",
    duration: "18 months",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] bg-slate-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70">
          <Image 
            src="https://images.pexels.com/photos/3762285/pexels-photo-3762285.jpeg" 
            alt="Kenya Tradex Projects" 
            fill
            className="object-cover mix-blend-overlay"
          />
        </div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg md:text-xl text-gray-200">
              Explore our portfolio of successful logistics projects across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our comprehensive portfolio of logistics projects across various 
              sectors including road construction, energy, oil & gas, and infrastructure.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
              {projectCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="all" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
            
            {projectCategories.slice(1).map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((project) => project.category === category.id)
                    .map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#032D60] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Contact us today to discuss how Kenya Tradex can support your next project 
            with our comprehensive logistics solutions.
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

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
    client: string;
    duration: string;
  };
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-semibold block">Client:</span>
            <span className="text-muted-foreground">{project.client}</span>
          </div>
          <div>
            <span className="font-semibold block">Duration:</span>
            <span className="text-muted-foreground">{project.duration}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}