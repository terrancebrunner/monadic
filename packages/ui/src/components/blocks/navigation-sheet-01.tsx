import { Button } from "@workspace/ui/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "@workspace/ui/components/blocks/shared/logo-02.js";
import { NavMenu } from "@workspace/ui/components/blocks/nav-menu-01";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="px-6 py-3">
        <Logo />
        <NavMenu orientation="vertical" className="mt-6 [&>div]:h-full" />
      </SheetContent>
    </Sheet>
  );
};
