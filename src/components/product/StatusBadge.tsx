import type { ProductStatus } from "@/data/products";
import { cn } from "@/lib/utils";

const STATUS_LABEL: Record<ProductStatus, string> = {
  LIVE: "Live",
  BUILDING: "Building",
  PLANNED: "Planned",
};

const STATUS_CLASSES: Record<ProductStatus, string> = {
  LIVE: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  BUILDING: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  PLANNED: "bg-muted text-muted-foreground border-border",
};

const StatusBadge = ({ status }: { status: ProductStatus }) => (
  <span
    className={cn(
      "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide",
      STATUS_CLASSES[status]
    )}
  >
    {status === "LIVE" && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />}
    {STATUS_LABEL[status]}
  </span>
);

export default StatusBadge;
