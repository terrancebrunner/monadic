// packages/ui/components/extended/fancy-button.tsx

import { Button, type buttonVariants } from "@workspace/ui/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

type FancyButtonProps =
  React.ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants>;

export function FancyButton({
  className,
  variant,
  size,
  ...props
}: FancyButtonProps) {
  return (
    <Button
      {...props}
      variant={variant}
      size={size}
      className={className}
    />
  );
}
