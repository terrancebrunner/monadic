import { cn } from "@workspace/ui/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Container({
  children,
  className,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={cn(
        // width behavior
        "w-full mx-auto",

        // horizontal padding
        "px-4 sm:px-6 lg:px-8",

        // max width constraint
        "max-w-screen-xl",

        className
      )}
    >
      {children}
    </Component>
  );
}
0