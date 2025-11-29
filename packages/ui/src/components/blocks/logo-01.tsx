import { cn } from "@workspace/ui/lib/utils";

export const Logo = ({ className, ...props }: React.ComponentProps<"img">) => {
  return (
    <img
      src="https://assets.berty.tech/files/favicon_berty--android-chrome-192x192.png"
      alt="logo"
      className={cn("size-7", className)}
      {...props}
    />
  );
};
