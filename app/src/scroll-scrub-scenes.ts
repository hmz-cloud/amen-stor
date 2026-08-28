import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#3557d4",
  background: "#11110f",
  ink: "#e9e6df",
  muted: "#b9b6ae",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Garments with a measured silhouette, cut for movement and made to hold their shape.",
    clip: "./assets/world/scene-01.mp4",
    id: "arrival",
    kicker: "AMEN. / PRIVATE SHOWROOM",
    label: "Arrival",
    mobileClip: "./assets/world/scene-01-mobile.mp4",
    mobilePoster: "./assets/world/scene-01-mobile-poster.png",
    poster: "./assets/world/scene-01-poster.png",
    tags: ["Limited release", "Designed for repeat wear"],
    title: "Wear the quiet statement.",
    align: "left",
    scroll: 2.2,
    linger: 0.18,
    objectPosition: "center center",
    mobileObjectPosition: "55% center",
  },
];
