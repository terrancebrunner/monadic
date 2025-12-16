# 'Monadic-UI' Monorepository

This is a monorepo with monadic-ui.

## File Structure

```
apps            # apps goes here.
└── web         # app goes here.
    ├── app
    │   └── page.tsx
    ├── components
    │   └── login-form.tsx
    ├── components.json
    └── package.json
packages
└── ui          # components and dependencies installed here.
    ├── src
    │   ├── components\
    │   │   └── animated
    │   │       └── animated-grid-pattern-v1.tsx
    │   │       └── animated-grid-pattern.tsx
    │   │       └── background-pattern.tsx
    │   │       └── dot-pattern.tsx
    │   │       └── particles.tsx
    │   │   └── atoms
    │   │       └── nav-menu.tsx
    │   │       └── navigation-sheet.tsx
    │   │   └── blocks
    │   │   └── extended
    │   │   └── gmh
    │   │   └── pages
    │   │   └── shared
    │   │   └── ui
    │   │       └── button.tsx
    │   ├── hooks
    │   ├── lib
    │   │   └── utils.ts
    │   └── styles
    │       └── globals.css
    ├── components.json
    └── package.json
public          # single source of truth for assets
└── *.svg
scripts         # custom scripts  
└── copy-public.js 
package.json
turbo.json
```
## /scripts

```copy-public.js``` copies contents of root /public into apps/web/public using:

```
node scripts/copy-public.js 
```

## adding components

To add components to apps/web, run the following command at the root of `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

`tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@workspace/ui/components/button";
```

---

### Notes: 
- Barrel components
- Block wrapper component for display
- three package.jsons:
    - app/web
    - packages/ui
    - root 
- /lib the new home for CMS
``` ts

// lib/profile.ts

export const profile = {
name: "GMH Lab",
username: "@gmhlab",
bio: "Center for Global Mental Health",
tagline: "Supporting Wellbeing Worldwide 🥼✨",
```
};

# NOTAE:

/* Data stream represented in real time with React Objects 

/* Bekkah Apellade' ( art brut / rebrand / monadic ui / single source your identity and/or {brand} */  
- Would you be interested in doing a few A/V sessions to 
- Not gonna lie, it's solicitation; but the right kind of solicitation ?
- Was thinking / to keep the brand as it / with a network of performers /
- Have an edited dialogue as to the motivations intents, pitfalls, and KPIs of cosplay ids on the internet 
    - Have to have our own content
    - Talk about the dirty actually it's not dirty, the correct word is pornographic stuff... gamergirl, cosplay, Ai, roleplaying, react, css, bitcoin, free stuff AND products
    - Which is not the same as the risque stuff
    - Switch gears as to what it was like being a avid comic book artist, film maker, musician AND EDM producer.  Oh and did I mention I'm a Design Engingeer and DevOps Developer?  Ecommerce brands like, Adidas, Mitchell & Ness, Airgas, Sephora, LVMH, The Word Health Organization, The GW School of Medicine and U Penn Medical School.  Particularly Wharton Business School Abnd the engineers, corcoran school of art and GW music department , and world health advocates at GW.  U Penn  
- I'm not using the name of my driver's license.
    - Jefferson Kidd is my pen name
    - Would suggest (in science of cosplay) creating a new character all together
        - Put padding between your brands, and my brands,
        - Greater control and delivery of strong intent when there's no click-thru identity strobe light effects
    - Also want to use you as a model for "Those Seen Dancing"
        - Their items are going to be converted to role playing mmorpg items (kinda like second life but better)
        - They are JavaScript objects
    - For a potential comic book / anime cartoon serial comic strip character 
- A Collection of React Apps, Components, Stylesheets, and Repositories.

THE MEANING IS WHAT MAKES THINGS ATTRACTIVE.  MEANING IS ACHIEVED THRU A NARRATIVE OF EVENTS IN THE WORLD-AT-LARGE.  MEANING MOVES AND MUST MOVE TO BE SPARKED INTO CONSCIOUSNESS- LIKE MUSIC.  MEANNG/MUSIC the is A BASE.  There is motion moving forward on a timeline in a series of meaningful phrases and themes.  Familiar characters, and melodies, become recognizable. They are nutured and evolve thru repetition, repetition of personality, repetition of interests, repetition of partners and relationships, and a repetition of the self in a way that she feels is congruent with how she would like to be seen, recognized, and understood.  

AND ABOVE ALL ELSE: what is meaningful to her...

The OGs of Social Media, MySpace (personal), Friendster(practical), and The Facebook (communal) (aka 'Am I Hot or Not').

When we say "social media", or "time online", what we really mean is our personal identity online being processed thru funnels, clicking on things, and getting clicks in return of various semantic meanings.  But now, there's so many of them.  And they're all pretty solid.  And there's literally robots and fake humans now.  And you can make art with them.  And make your own money.  And guarantee it with your other assets on a digital public ledger, to creates safeguards beyond the world's banks and stock markets.  

Is this guy here to sell us bitcoin?

No... sadly... I'm here to sell you the future.  One where you control social media.  You set the frame, and instagram, and facebook, are nothing more than a name on your junkmail.  A shitty store name on a crumpled receipt.  Meta, Westinghouse, X, are fine.  But there's no more ubers.  Things have fizzled out.  And Ai has become discouraging and disenchanting.  

I remember the initial build when they rolled out linktree

I loved the basic but effective engineering and app-like navigation, unlike Facebook who had begun burying menus within menus within features blah blah.  It was nice to have a hub.  There was an abstract organizational element that really appealed to my 

LIVE COSTUME AND ROLE PLAY Academy for the Arts and Sciences
=====> art?

Document your process - builds trust

Start with Monadic

Then Rebea Apleadde (the art brut)
- she doesn't like the pairing
- do you mind if men fantasize that you're from Ghana?
- what about, men you fantasize that you're from outer space?
- how do you like those both served?

Arts & Sciences
/* Bekkah Apellade' ( art brut / rebrand / monadic ui / single source your identity and/or {brand} */
/* cosplay solicitation services / tech demos / art instructional / news & updates / free stuff and promos) */

### DARK GAMERS WHEN GAMING 

(black hoodies neon green / lime lightbeams) (body conceled but with dark/rogue atmos)

Adds contrast to 

### AI SYNTHS IN THE GAME


RAINBOW FLAMINGO feat. Aziz(tm) Copyright 2025 KALEIDOSCOPT of BUTTERFLIES.

RAINBOW FLAMINGO... she was originally a venue.  A speakeasy ampitheater if you will.  But she was too expensive to make.  So one night, when I was checking the iot logs between my live rig and the second boiler, I started thinking

MAYBE THE BOILER PRESSURE, TEMP, AND AIR COMPoSITION doesn't need to be on my dashboard.  As an EDM performer I wanna do more than sling effets like saturation, hi pass filters, low bass filters, bars, 4 on the floor, builds,  

Do you think my custom DAW is cool Aziz?  I'm supposed to have an APC-40 MK2.  Whaddaya think of those?

## This is all KALEIDOSCOPE of BUTTERFLIES

sponsored by EDC, WXPN, edm.101, Koresh School, Lost Lands, Electric Forrest, Corcoran Academy, Pangolin Lasers, House of Yes, and MONDAIC-UI baby!


* CaSS Cademce ID Token
* Monorepo
* Dependencies
* Monadic-UI
* Primitives
* Tokens
* Styles
* Principles

!!! Textile Made Tech Packet
- Skirt + Teeshirt
- Double embroidered textures
- Measurements