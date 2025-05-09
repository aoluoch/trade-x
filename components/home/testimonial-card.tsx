import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

export default function TestimonialCard({ quote, author, company, image }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardContent className="pt-6 flex-1">
        <QuoteIcon className="h-8 w-8 text-[#FFA500] mb-4" />
        <p className="text-muted-foreground mb-4">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start border-t pt-4">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </CardFooter>
    </Card>
  );
}