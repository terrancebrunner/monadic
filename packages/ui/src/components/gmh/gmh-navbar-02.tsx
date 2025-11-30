import { Button } from "@workspace/ui/components/ui/button";
import Logo3 from "@workspace/ui/components/shared/logo-03";
import { NavMenu } from "@workspace/ui/components/atoms/nav-menu";
import { NavigationSheet } from "@workspace/ui/components/atoms/navigation-sheet";
import { SunIcon } from "lucide-react";
import { ModeToggle } from "@workspace/ui/components/shared/mode-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo3 className="w-16 mb-2"/>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button>Sign Up</Button>
          <ModeToggle />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
