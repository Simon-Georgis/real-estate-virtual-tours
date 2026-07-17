## What we're building

A personal portfolio website for **Simon / DigiRise – Real Estate Media** showcasing finished property shoots. Properties are added by editing a single data file — no login, no database, no uploads UI. Each property gets its own page with photos, videos, and an optional Matterport 3D tour.

## Branding

- Business: **DigiRise – Real Estate Media**
- Owner: Simon
- Phone: **0432 436 658**
- Email: **info@digirise.com.au**
- ABN: **82 302 930 360**
- Logo: the uploaded DigiRise mark — used in the header, footer, and as the favicon. Palette will be pulled from the logo (deep navy + teal gradient on a warm off‑white).

## Pages / routes

- `/` — Home. Hero with logo + tagline, services overview, featured properties, contact block.
- `/properties` — Grid of all properties (cover image + address).
- `/properties/$slug` — Individual property: address, image gallery (lightbox), embedded videos, embedded Matterport 3D tour.
- `/services` — 360° in‑house walkthrough, drone photos & video, interior & exterior stills.
- `/contact` — Phone, email, ABN, business info.

Shared header (logo + nav) and footer (contact info + ABN) live in `__root.tsx`.

## How Simon adds a property

Edit `src/data/properties.ts` — one object per property:

```ts
{
  slug: "12-example-st-sydney",
  address: "12 Example St, Sydney NSW",
  cover: "/properties/12-example/cover.jpg",
  images: ["/properties/12-example/01.jpg", "..."],
  videos: ["https://youtu.be/...", "https://vimeo.com/..."], // or mp4 URLs
  matterportUrl: "https://my.matterport.com/show/?m=XXXX",  // optional
  services: ["Drone", "Interior", "360 Tour"],              // optional tags
}
```

Photos go in `public/properties/<slug>/`. Videos and Matterport are pasted as URLs.

## Design direction

"Surprise me" — I'll take cues from the logo: deep navy (#0f2340-ish) + teal accent, warm off‑white background, generous whitespace, large imagery, clean modern sans typography. Cinematic real‑estate feel. I'll generate 3 rendered directions built around the logo's palette and let you pick before I build.

## Technical details

- TanStack Start file‑based routes.
- Logo uploaded via Lovable Assets → used in header, footer, hero, and as favicon (`/favicon.png`).
- Property data typed in `src/data/properties.ts` with `getAllProperties()` / `getPropertyBySlug(slug)` helpers.
- Gallery uses a lightweight lightbox (`yet-another-react-lightbox`).
- Matterport embedded via `<iframe>` with `allow="fullscreen; xr-spatial-tracking; web-share"`.
- YouTube/Vimeo URLs auto‑converted to embed iframes; direct mp4 URLs use `<video>`.
- Per‑route `head()` metadata (title, description, og tags). Property pages use the cover image for `og:image`.
- No Lovable Cloud, no auth, no backend.

## Next step

After you approve, I'll generate 3 design directions based on the DigiRise logo palette, you pick one, then I build.