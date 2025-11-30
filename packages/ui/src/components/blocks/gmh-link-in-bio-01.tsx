"use client"

import { useTheme } from "next-themes";
import { ModeToggle } from "@workspace/ui/components/utility/mode-toggle";
import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@workspace/ui/components/avatar"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { Switch } from "@workspace/ui/components/switch"
import { Label } from "@workspace/ui/components/label"
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
    name: "GMH Lab",
    username: "@gmhlab",
    bio: "Center for Global Mental Health",
    tagline: "Supporting Wellbeing Worldwide 🥼✨",
    avatar: "/gmh_logo_dark.svg",
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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 dark:from-[#064e75ff] dark:to-[#033c5aff]">
        <div className="mx-auto max-w-2xl px-4 py-12">
          {/* Theme Toggle */}
          <div className="mb-8 flex justify-end">
            <div className="flex items-center gap-2">
              <Label htmlFor="theme-toggle" className="cursor-pointer">
                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Label>
              <Switch
                id="theme-toggle"
                checked={isDark}
                onCheckedChange={setIsDark}
              /> 
              <ModeToggle />
            </div>
          </div>

          {/* Profile Section */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Avatar className="mb-4 h-24 w-24 ring-4 ring-white dark:ring-slate-800 p-2">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>BK</AvatarFallback>
            </Avatar>
            
            <div className="mb-2 flex items-center gap-2">
              <h1 className="text-slate-900 dark:text-slate-50">{profile.name}</h1>
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
                className="group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg"
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
          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400">
              2025© shipped by KALEIDOSCOPE of BUTTERFLIES
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
