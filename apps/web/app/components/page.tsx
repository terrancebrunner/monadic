import { Button } from "@workspace/ui/components/ui/button";
import { FancyButton } from "@workspace/ui/components/extended/fancy-button";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@workspace/ui/components/ui/card";
import { Separator } from "@workspace/ui/components/ui/separator";
import { Badge } from "@workspace/ui/components/ui/badge";
import { Input } from "@workspace/ui/components/ui/input"
import { Label } from "@workspace/ui/components/ui/label"
import { TrendingUp, Eye, MousePointerClick 
 } from "lucide-react";

export default function Page() {

  const stats = {
    totalViews: 12543,
    totalClicks: 5313,
    engagement: 42.3
  }

  return (
    <>
      <header className="flex flex-col items-center justify-center bg-secondary gap-8 px-12 pt-12">
        <h1 className="text-6xl font-bold text-center text-secondary-foreground mb-4">Monadic Components</h1>
        <Separator />  
      </header>

      <main className="bg-background w-full">
        <div className="container mx-auto py-12">

          <div className="flex gap-12">
            
            <div className="flex flex-wrap items-center rounded-lg p-3 border gap-2">
              <h2>shadcn</h2>
              <Button size="sm">Button</Button>
              <Button>Button</Button>
              <Button size="lg">Button</Button>
            </div>

            <div className="flex items-center rounded-lg p-3 border gap-2">
              <h2>fancy GMH</h2>
              <FancyButton>Button</FancyButton>
            </div>
          
        </div>

        <div className="flex gap-12"></div>
          <div className="flex flex-wrap items-center rounded-lg p-3 border gap-2">
            <Card className="w-full max-w-sm">
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                  <Button variant="link">Sign Up</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                          href="#"
                          className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Input id="password" type="password" required />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </CardFooter>
            </Card>



            <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Profile Analytics
              </CardTitle>
              <CardDescription>Your link performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Eye className="mb-2 h-5 w-5 text-muted-foreground" />
                  <div className="text-accent">{stats.totalViews.toLocaleString()}</div>
                  <div className="text-muted-foreground">Views</div>
                </div>
                <div className="flex flex-col items-center">
                  <MousePointerClick className="mb-2 h-5 w-5 text-muted-foreground" />
                  <div className="text-accent">{stats.totalClicks.toLocaleString()}</div>
                  <div className="text-muted-foreground">Clicks</div>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="mb-2 h-5 w-5 text-muted-foreground" />
                  <div className="text-accent">{stats.engagement}%</div>
                  <div className="text-muted-foreground">Rate</div>
                </div>
              </div>
            </CardContent>
            </Card>
          </div>
        </div>
  </main>
      
    </>
  );
}
