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
    │   ├── components
    │   │   └── button.tsx
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