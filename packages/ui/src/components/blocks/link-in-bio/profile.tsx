import { Avatar, AvatarImage, AvatarFallback } from "@workspace/ui/components/ui/avatar"
import { Badge } from "@workspace/ui/components/ui/badge"
import { Heart } from "lucide-react"

export function Profile ({ avatar, name, bio, tagline })
          {/* Profile Section */}
          <div className="mb-8 flex flex-col items-center text-center">
            <Avatar className="mb-4 h-24 w-24 ring-4 ring-white dark:ring-slate-800">
              <AvatarImage src={profile.avatar} alt={profile.name} />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
            
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

import DarkLightAvatar from "@workspace/ui/components/shared/dark-light-avatar"

export function ProfileCard({ avatar, name, bio, tagline }: { avatar: string, name: string, bio: string, tagline: string }) {
  return (
    <div className="mb-8 flex flex-col items-center text-center">
      <Avatar className="mb-4 h-24 w-24 ring-4 ring-white dark:ring-slate-800">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>AM</AvatarFallback>
      </Avatar>
      <DarkLightAvatar className="mb-1" />
      <h1 className="text-5xl font-normal font-serif">{name}</h1>
      <div className="mb-2 flex items-center gap-2">
              <h1 className="text-foreground text-5xl text-semibold">{name}</h1>
              {profile.verified && (
                <Badge variant="default" className="gap-1">
                  <Heart className="h-3 w-3 fill-current" />
                  Verified
                </Badge>
              )}
            </div>
      <p className="text-xl text-muted-foreground">{bio}</p>
      <p className="text-slate-600 dark:text-slate-400">{tagline}</p>
    </div>
  )
}