"use client"

import DarkLightAvatar from "@workspace/ui/components/shared/dark-light-avatar" ;
import { ModeToggle } from "@workspace/ui/components/shared/mode-toggle";
import { useState } from "react"
import { Button } from "@workspace/ui/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/ui/card"
import { Badge } from "@workspace/ui/components/ui/badge"
import { Separator } from "@workspace/ui/components/ui/separator"
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

  const avatar = {
    dark: "./gmh_logo_dark.svg",
    light: "./gmh_logo_light.svg",
    fallback: "GMH"
  }

  const profile = {
    name: "Monorepo Portal",
    username: "@gmhlab",
    bio: "The GW Center for Global Mental Health",
    tagline: 'Washington, DC'
  }

  const socialLinks: SocialLink[] = [
    { platform: "Instagram", url: "", icon: <Instagram className="h-5 w-5" />, color: "hover:text-white" },
    { platform: "Twitter", url: "", icon: <Twitter className="h-5 w-5" />, color: "hover:text-white" },
    { platform: "YouTube", url: "", icon: <Youtube className="h-5 w-5" />, color: "hover:text-white" },
    { platform: "LinkedIn", url: "", icon: <Linkedin className="h-5 w-5" />, color: "hover:text-white" },
    { platform: "GitHub", url: "", icon: <Github className="h-5 w-5" />, color: "hover:text-slate-700" },
  ]

  const links: LinkItem[] = [
    {
      id: "1",
      title: "Website",
      description: "Our center at The GW School of Medicine and Health Sciences",
      url: "/login",
      icon: <Globe className="h-5 w-5" />,
      badge: "Featured",
      clicks: 1243
    },
    {
      id: "2",
      title: "Online Store",
      description: "Shop 'GMH Compendium', exclusive merch, and digital products",
      url: "/login/05",
      icon: <ShoppingBag className="h-5 w-5" />,
      badge: "New",
      clicks: 856
    },
    {
      id: "3",
      title: "Latest News",
      description: '"10 Tips for Clarivate accreditation" by Dr. Brandon Kohrt MD, PhD"',
      url: "/signup",
      icon: <BookOpen className="h-5 w-5" />,
      clicks: 432
    },
    {
      id: "4",
      title: "Hire You!",
      description: "Volunteer and professional trainings",
      url: "/blocks",
      icon: <Briefcase className="h-5 w-5" />,
      clicks: 678
    },
    {
      id: "5",
      title: "Newsletter",
      description: "Global mental health events and industry insights",
      url: "/landing",
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
    <div className="min-h-screen bg-background">
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-200 dark:from-[#033c5a] dark:to-[#02263a]">
        <div className="mx-auto max-w-2xl px-4 pt-4 pb-12">

          {/* Profile Section */}
          <div className="mb-6 rounded-full flex flex-col items-center text-center">
            <DarkLightAvatar dark={avatar.dark} light={avatar.light} className="" />
          
            <div className="mb-3 flex items-center gap-2">
              <h1 className="text-5xl font-normal font-serif text-foreground">{profile.name}</h1>
            </div>
            
            <p className="mb-2 text-xl text-muted-foreground">{profile.bio}</p>
            <p className="text-slate-600 dark:text-slate-400">{profile.tagline}</p>
          </div>

          {/* Social Links */}
          <div className="mb-8 flex justify-center gap-3">
            {socialLinks.map((social) => (
              <Button
                key={social.platform}
                variant="outline"
                size="icon"
                className={`text-[#aa9868] transition-colors ${social.color}`}
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
                Analytics
              </CardTitle>
              <CardDescription>Link performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <Eye className="mb-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <div className="text-accent">{stats.totalViews.toLocaleString()}</div>
                  <div className="text-slate-500 dark:text-slate-400">Views</div>
                </div>
                <div className="flex flex-col items-center">
                  <MousePointerClick className="mb-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <div className="text-accent">{stats.totalClicks.toLocaleString()}</div>
                  <div className="text-slate-500 dark:text-slate-400">Clicks</div>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="mb-2 h-5 w-5 text-slate-500 dark:text-slate-400" />
                  <div className="text-accent">{stats.engagement}%</div>
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
                        <div className="mt-1 rounded-lg bg-accent p-2">
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
              2025© Supporting Wellbeing Worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
