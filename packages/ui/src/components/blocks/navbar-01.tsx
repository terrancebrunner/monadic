import { Button } from "@workspace/ui/components/ui/button";
import { Logo } from "@workspace/ui/components/blocks/shared/logo-02.js";
import { NavMenu } from "@workspace/ui/components/blocks/nav-menu-01.js";
import { NavigationSheet } from "@workspace/ui/components/blocks/navigation-sheet-01.js";
import { ModeToggle } from "@workspace/ui/components/blocks/shared/mode-toggle.js";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <a href="/">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button>
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
