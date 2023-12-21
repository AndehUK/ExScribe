import { LucideIcon } from "lucide-react";
import { Id } from "@/../convex/_generated/dataModel";

export interface NavigationItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
}
