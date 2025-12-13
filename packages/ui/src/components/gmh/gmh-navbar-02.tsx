import { Button } from "@workspace/ui/components/ui/button";
import { NavMenu } from "@workspace/ui/components/gmh/gmh-nav-menu";
import { NavigationSheet } from "@workspace/ui/components/atoms/navigation-sheet";
import { ModeToggle } from "@workspace/ui/components/shared/mode-toggle";
import DarkLightAvatar from "@workspace/ui/components/shared/dark-light-avatar";

const Navbar = () => {

  const avatar = {
    dark: "./gmh_logo_dark.svg",
    light: "./gmh_logo_light.svg",
    fallback: "GMH"
  }

  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <a href="/">
            <DarkLightAvatar dark={avatar.dark} light={avatar.light} fallback={avatar.fallback} className="w-16 h-16"/>
          </a>
          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">
          <a href="/login">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
          </a>
          <a href="/signup">
            <Button>Sign Up</Button>
          </a>
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
