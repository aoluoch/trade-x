import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  company?: string;
  location: string;
  testimonial: string;
  contact: string;
}

export default function TestimonialCard({
  name,
  company,
  location,
  testimonial,
  contact,
}: TestimonialCardProps) {
  return (
    <Card className="bg-slate-50">
      <CardHeader className="text-center">
        <Quote className="w-8 h-8 mx-auto text-orange-500 mb-4" />
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-600 mb-6 italic">{testimonial}</p>
        <div className="space-y-2">
          <h4 className="font-bold">{name}</h4>
          {company && <p className="text-sm text-gray-500">{company}</p>}
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-sm text-gray-500">{contact}</p>
        </div>
      </CardContent>
    </Card>
  );
}
