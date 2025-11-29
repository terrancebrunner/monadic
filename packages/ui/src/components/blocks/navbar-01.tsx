import { Button } from "@workspace/ui/components/button";
import { Logo } from "@workspace/ui/components/blocks/logo-02";
import { NavMenu } from "@workspace/ui/components/blocks/nav/nav-menu";
import { NavigationSheet } from "@workspace/ui/components/blocks/nav/navigation-sheet";
import { ModeToggle } from "@workspace/ui/components/utility/mode-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />

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
