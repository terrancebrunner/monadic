import { cn } from "@workspace/ui/lib/utils";
import { Container } from "@workspace/ui/components/blocks/shared/container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bleed?: boolean; // allow full-bleed backgrounds
  as?: React.ElementType;
};

export function Section({
  children,
  className,
  containerClassName,
  bleed = false,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component
      className={cn(
        // vertical rhythm
        "py-12 sm:py-16 lg:py-20",
        className
      )}
    >
      {bleed ? (
        children
      ) : (
        <Container className={containerClassName}>
          {children}
        </Container>
      )}
    </Component>
  );
}
