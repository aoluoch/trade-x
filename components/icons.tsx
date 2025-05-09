import {
  Truck,
  FileText,
  Plane,
  Ship,
  Package,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type IconName =
  | "truck"
  | "file-text"
  | "plane"
  | "ship"
  | "package"
  | "building2";

export const Icons: Record<IconName, LucideIcon> = {
  truck: Truck,
  "file-text": FileText,
  plane: Plane,
  ship: Ship,
  package: Package,
  building2: Building2,
};
