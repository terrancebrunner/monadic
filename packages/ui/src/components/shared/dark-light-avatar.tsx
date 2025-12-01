"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@workspace/ui/components/ui/avatar";
import { useTheme } from "next-themes";

interface DarkLightAvatarProps {
  className?: string;
  dark: string;     // dark-mode image path
  light: string;    // light-mode image path
  fallback?: string; // initials or text for fallback
}

export default function DarkLightAvatar({
  className = "",
  dark,
  light,
  fallback = "?",  // default fallback
}: DarkLightAvatarProps) {
  const { theme, systemTheme } = useTheme();

  const resolved =
    theme === "system" ? systemTheme : theme;

  const avatarSrc =
    resolved === "dark" ? dark : light;

  return (
    <Avatar className={`h-40 w-40 p-2 ${className}`}>
      <AvatarImage src={avatarSrc} alt="Avatar" className="mt-1" />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
