import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="text-[#032D60] dark:text-[#4B91F1] mb-2">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <div className="p-6 pt-0">
        <Link
          href={href}
          className="text-[#032D60] dark:text-[#4B91F1] font-medium flex items-center gap-1 group"
        >
          <span>Learn More</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
