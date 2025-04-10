
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  subtext?: string;
  children: React.ReactNode;
  className?: string;
  subtextClassName?: string;
}

export function SectionTitle({ subtext, children, className, subtextClassName }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      {subtext && <p className={cn("text-sm uppercase tracking-wider text-krishi-blue font-semibold mb-2", subtextClassName)}>{subtext}</p>}
      <h2 className={cn("text-3xl md:text-4xl font-bold tracking-tight", className)}>
        {children}
      </h2>
    </div>
  );
}
