import { Button } from "@workspace/ui/components/ui/button";
import { FancyButton } from "@workspace/ui/components/extended/fancy-button";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <div className="flex flex-wrap items-center rounded-lg p-3 border gap-2">
          <h2>shadcn</h2>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </div>
        <div className="flex flex-wrap items-center rounded-lg p-3 border gap-2">
        <h2>fancy GMH</h2>
          <FancyButton>Button</FancyButton>
        </div>
      </div>
    </div>
  );
}
