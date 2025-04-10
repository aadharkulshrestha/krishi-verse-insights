
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function BadgeCustom({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-krishi-green-light text-white", className)}>
      {children}
    </span>
  );
}
