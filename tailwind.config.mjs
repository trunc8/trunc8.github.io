/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: "var(--color-brand)",
        surface: "var(--color-surface)",
        "surface-alt": "var(--color-surface-alt)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-muted": "var(--color-on-surface-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: [
          "San Francisco Display",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "var(--color-on-surface)",
            a: {
              color: "var(--color-brand)",
              "&:hover": {
                color: "var(--color-brand-hover)",
              },
            },
            strong: { color: "var(--color-on-surface)" },
            h1: { color: "var(--color-on-surface)" },
            h2: { color: "var(--color-on-surface)" },
            h3: { color: "var(--color-on-surface)" },
            h4: { color: "var(--color-on-surface)" },
            code: { color: "var(--color-on-surface)" },
            blockquote: {
              color: "var(--color-on-surface-muted)",
              borderLeftColor: "var(--color-border)",
            },
            hr: { borderColor: "var(--color-border)" },
            "thead th": { color: "var(--color-on-surface)" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
