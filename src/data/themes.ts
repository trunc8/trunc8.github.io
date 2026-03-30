/** Blog post theme groupings, in display order */
export const blogThemes = [
  "Motion Planning & Navigation",
  "Legged Locomotion",
  "CV & SLAM",
  "Paper Reviews",
  "Programming & Systems",
] as const;

export type BlogTheme = (typeof blogThemes)[number];
