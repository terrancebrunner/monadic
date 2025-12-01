import { Button } from "@workspace/ui/components/ui/button";
import { NavMenu } from "@workspace/ui/components/atoms/nav-menu";
import { NavigationSheet } from "@workspace/ui/components/atoms/navigation-sheet";
import { ModeToggle } from "@workspace/ui/components/shared/mode-toggle";
import DarkLightAvatar from "@workspace/ui/components/shared/dark-light-avatar";

const Navbar = () => {

  const avatar = {
    dark: "./monadic_logo_dark.svg",
    light: "./monadic_logo_light.svg",
    fallback: "AW"
  }

  return (
    <nav className="h-16 bg-background border-b">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <DarkLightAvatar dark={avatar.dark} light={avatar.light} className="w-16 h-16"/>

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
