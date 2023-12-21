import { Doc, Id } from "@/../convex/_generated/dataModel";

export interface DocumentProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}
