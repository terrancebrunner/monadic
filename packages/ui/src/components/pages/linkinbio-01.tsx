"use client";

import DarkLightAvatar from "@workspace/ui/components/blocks/shared/dark-light-avatar"

import { useState } from "react"
import { Button } from "@workspace/ui/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/ui/card"
import { Badge } from "@workspace/ui/components/ui/badge"
import { Separator } from "@workspace/ui/components/ui/separator"
import { Switch } from "@workspace/ui/components/ui/switch"
import { Label } from "@workspace/ui/components/ui/label"
import { 
  Instagram, 
  Twitter, 
  Youtube, 
  Linkedin, 
  Github, 
  Mail, 
  Globe, 
  ShoppingBag, 
  BookOpen, 
  Briefcase,
  Heart,
  Share2,
  Moon,
  Sun,
  TrendingUp,
  Eye,
  MousePointerClick
} from "lucide-react"
import { Fallback } from "@radix-ui/react-avatar";

interface LinkItem {
  id: string
  title: string
  description?: string
  url: string
  icon: React.ReactNode
  badge?: string
  clicks?: number
}

interface SocialLink {
  platform: string
  url: string
  icon: React.ReactNode
  color: string
}

export function LinkInBio() {
  const [isDark, setIsDark] = useState(false)
  const [isSharing, setIsSharing] = useState(false)

  const profile = {
    name: "Monadic UI",
    username: "@monadic",
    bio: "Design • Develop • Deliver",
    tagline: "Building beautiful things on the internet ✨",
    avatar: {
      dark: "/monadic_logo_dark.svg",
      light: "/monadic_logo_light.svg",
      fallback: "MON"
    },
    verified: true
  }

  const socialLinks: SocialLink[] = [
    { platform: "Instagram", url: "#", icon: <Instagram className="h-5 w-5" />, color: "hover:text-pink-500" },
    { platform: "Twitter", url: "#", icon: <Twitter className="h-5 w-5" />, color: "hover:text-blue-400" },
    { platform: "YouTube", url: "#", icon: <Youtube className="h-5 w-5" />, color: "hover:text-red-500" },
    { platform: "LinkedIn", url: "#", icon: <Linkedin className="h-5 w-5" />, color: "hover:text-blue-600" },
    { platform: "GitHub", url: "#", icon: <Github className="h-5 w-5" />, color: "hover:text-slate-700" },
  ]

  const links: LinkItem[] = [
    {
      id: "1",
      title: "Portfolio Website",
      description: "Check out my latest work and projects",
      url: "#",
      icon: <Globe className="h-5 w-5" />,
      badge: "Featured",
      clicks: 1243
    },
    {
      id: "2",
      title: "Online Store",
      description: "Shop exclusive merch and digital products",
      url: "#",
      icon: <ShoppingBag className="h-5 w-5" />,
      badge: "New",
      clicks: 856
    },
    {
      id: "3",
      title: "Latest Blog Post",
      description: "10 Tips for Better Design in 2024",
      url: "#",
      icon: <BookOpen className="h-5 w-5" />,
      clicks: 432
    },
    {
      id: "4",
      title: "Hire Me",
      description: "Available for freelance projects",
      url: "#",
      icon: <Briefcase className="h-5 w-5" />,
      clicks: 678
    },
    {
      id: "5",
      title: "Newsletter",
      description: "Weekly insights on design and development",
      url: "#",
      icon: <Mail className="h-5 w-5" />,
      badge: "Popular",
      clicks: 2104
    },
  ]

  const stats = {
    totalViews: 12543,
    totalClicks: 5313,
    engagement: 42.3
  }

  const handleShare = async () => {
    setIsSharing(true)
    setTimeout(() => setIsSharing(false), 1000)
  }

  return (
    <div className={`min-h-screen transition-colors ${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-2xl px-4 py-12">
          {/* Theme Toggle */}


          {/* Profile Section */}
          <div className="mb-8 flex flex-col items-center text-center">
            <DarkLightAvatar
              dark={profile.avatar.dark}
              light={profile.avatar.light}
              fallback={profile.avatar.fallback}
              className="h-28 w-28"
            />

            
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-slate-900 dark:text-slate-50">{profile.name}</h1>
              {profile.verified && (
                <Badge variant="default" className="gap-1">
                  <Heart className="h-3 w-3 fill-current" />
                  Verified
                </Badge>
              )}
            </div>
            
            <p className="mb-2 text-slate-600 dark:text-slate-400">{profile.username}</p>
            <p className="mb-1 text-slate-900 dark:text-slate-50">{profile.bio}</p>
            <p className="text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          </div>

          {/* Social Links */}
          <div className="mb-8 flex justify-center gap-3">
            {socialLinks.map((social) => (
              <Button
                key={social.platform}
                variant="outline"
                size="icon"
                className={`transition-colors ${social.color}`}
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={handleShare}
              disabled={isSharing}
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Analytics Card */}
          <Card className="mb-6">
            <CardHeader className="">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Profile Analytics
              </CardTitle>
              <CardDescription className="">Your link performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Eye className="mb-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <div className="text-slate-900 dark:text-slate-50">{stats.totalViews.toLocaleString()}</div>
                  <div className="text-slate-500 dark:text-slate-400">Views</div>
                </div>
                <div className="flex flex-col items-center">
                  <MousePointerClick className="mb-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <div className="text-slate-900 dark:text-slate-50">{stats.totalClicks.toLocaleString()}</div>
                  <div className="text-slate-500 dark:text-slate-400">Clicks</div>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="mb-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <div className="text-slate-900 dark:text-slate-50">{stats.engagement}%</div>
                  <div className="text-slate-500 dark:text-slate-400">Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="mb-6" />

          {/* Links Section */}
          <div className="space-y-4">
            {links.map((link) => (
              <Card
                key={link.id}
                className="flex h-[90px] group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <a href={link.url} className="block">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 rounded-lg bg-slate-100 p-2 dark:bg-slate-800">
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="mb-1 flex items-center gap-2">
                            {link.title}
                            {link.badge && (
                              <Badge variant="secondary">{link.badge}</Badge>
                            )}
                          </CardTitle>
                          {link.description && (
                            <CardDescription>{link.description}</CardDescription>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-slate-500 dark:text-slate-400">
                          {link.clicks?.toLocaleString()}
                        </div>
                        <div className="text-slate-400 dark:text-slate-500">clicks</div>
                      </div>
                    </div>
                  </CardHeader>
                </a>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col mt-12 justify-center items-center text-center">
            <p className="text-center text-foreground text-slate-500 text-sm dark:text-slate-400">

            </p>
            <p className="text-center text-slate-500 text-sm dark:text-slate-400">
              Made with ❤️ using monadic/ui
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
