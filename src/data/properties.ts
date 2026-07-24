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
    slug: "57-earl-street-canley-heights-2165-nsw",
    address: "57 Earl Street",
    suburb: "Canley Heights, NSW",
    cover: "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_low_n.jpg",
    images: [
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_selected.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/back_selected.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/side_selected.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_high.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_high_n.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_low.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_low_n.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/front_sky.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/back_high.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/back_high_n.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/back_low.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/back_low_n.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/back_sky.jpg",
      "/properties/57-earl-street-canley-heights-2165-nsw/Image/side_sky.jpg",
    ],
    videos: [
      "https://youtu.be/LxCYNKohueM",
      "https://youtu.be/PRZ63Q285zA",
      "https://youtu.be/wCmg8itDvVQ",
      "https://www.youtube.com/watch?v=B4ShSE89Tsc",
      "https://youtube.com/shorts/0d3JgFVOjBI",
    ],
    matterportUrl: "https://my.matterport.com/show/?m=SiMTkSpihUc",
    services: ["Photography", "Cinematic Video", "Matterport 3D Tour"],
    note: "Full property shoot with photos, edited video, and Matterport 3D tour.",
    date: "2026-07-24",
  },
];

export function getAllProperties(): Property[] {
  return [...properties].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getPropertyBySlug(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug);
}
