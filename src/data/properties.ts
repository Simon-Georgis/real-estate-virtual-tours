import highviewCover from "@/assets/property-highview-cover.jpg";
import skyloftCover from "@/assets/property-skyloft-cover.jpg";
import riverbendCover from "@/assets/property-riverbend-cover.jpg";
import heroPeninsula from "@/assets/hero-peninsula.jpg";

export type Property = {
  slug: string;
  address: string;
  suburb?: string;
  cover: string;
  images: string[];
  /** YouTube, Vimeo, or direct mp4 URLs. */
  videos?: string[];
  /** Full Matterport share URL, e.g. https://my.matterport.com/show/?m=XXXX */
  matterportUrl?: string;
  services?: string[];
  /** Short one-line note about the shoot. */
  note?: string;
  /** ISO date string. Sorts newest first. */
  date?: string;
};

/**
 * Add a new property by appending an object to this list.
 * Photos live in public/properties/<slug>/ or imported from src/assets.
 */
export const properties: Property[] = [
  {
    slug: "42-highview-crescent",
    address: "42 Highview Crescent",
    suburb: "Toorak, VIC",
    cover: highviewCover,
    images: [highviewCover, riverbendCover, heroPeninsula],
    services: ["Interior Photography", "Drone", "Cinematic Video"],
    note: "Full media package for a light-filled contemporary residence.",
    date: "2026-05-12",
  },
  {
    slug: "the-skyloft-penthouse",
    address: "The SkyLoft Penthouse",
    suburb: "Southbank, VIC",
    cover: skyloftCover,
    images: [skyloftCover, highviewCover, heroPeninsula],
    matterportUrl: "https://my.matterport.com/show/?m=SxQL3iGyoDo",
    services: ["Matterport 3D Tour", "Drone", "Interior Stills"],
    note: "Immersive 3D walkthrough for a landmark penthouse.",
    date: "2026-04-02",
  },
  {
    slug: "18-riverbend-mews",
    address: "18 Riverbend Mews",
    suburb: "Hawthorn, VIC",
    cover: riverbendCover,
    images: [riverbendCover, highviewCover, skyloftCover],
    videos: ["https://www.youtube.com/watch?v=aqz-KE-bpKQ"],
    services: ["Interior Photography", "Cinematic Video"],
    note: "Editorial interiors and a hero walk-through film.",
    date: "2026-02-20",
  },
];

export function getAllProperties(): Property[] {
  return [...properties].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
