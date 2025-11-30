"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@workspace/ui/components/avatar";
import { useTheme } from "next-themes";

interface DarkLightAvatarProps {
  className?: string;
}

const DarkLightAvatar: React.FC<DarkLightAvatarProps> = ({ className }) => {
  const { theme } = useTheme();

  const avatarSrc =
    theme === "dark" ? "/gmh_logo_dark.svg" : "/gmh_logo_light.svg";

  return (
    <Avatar className={`h-40 w-40 p-2 ${className}`}>
      <AvatarImage src={avatarSrc} alt="GMH Logo" className="mt-1" />
      <AvatarFallback>BK</AvatarFallback>
    </Avatar>
  );
};

export default DarkLightAvatar;