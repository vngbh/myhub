// Tailwind config is kept for editor support and stable color utilities.
const config = {
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      brand: "var(--brand)",
      "brand-link": "var(--brand-link)",
      "brand-border": "var(--brand-border)",
      green: "var(--green)",
      boldgreen: "var(--boldgreen)",
      grey: "var(--grey)",
      "soft-text": "var(--soft-text)",
      "surface-hover": "var(--surface-hover)",
      note: "var(--note)",
      background: "var(--background)",
      foreground: "var(--foreground)",
      border: "var(--border)",
      "border-strong": "var(--border-strong)",
      input: "var(--input)",
      ring: "var(--ring)",
      card: {
        DEFAULT: "var(--card)",
        foreground: "var(--card-foreground)",
      },
      popover: {
        DEFAULT: "var(--popover)",
        foreground: "var(--popover-foreground)",
      },
      primary: {
        DEFAULT: "var(--primary)",
        foreground: "var(--primary-foreground)",
      },
      secondary: {
        DEFAULT: "var(--secondary)",
        foreground: "var(--secondary-foreground)",
      },
      muted: {
        DEFAULT: "var(--muted)",
        foreground: "var(--muted-foreground)",
      },
      accent: {
        DEFAULT: "var(--accent)",
        foreground: "var(--accent-foreground)",
      },
      destructive: "var(--destructive)",
      sidebar: {
        DEFAULT: "var(--sidebar)",
        foreground: "var(--sidebar-foreground)",
        primary: "var(--sidebar-primary)",
        "primary-foreground": "var(--sidebar-primary-foreground)",
        accent: "var(--sidebar-accent)",
        "accent-foreground": "var(--sidebar-accent-foreground)",
        border: "var(--sidebar-border)",
        ring: "var(--sidebar-ring)",
      },
    },
  },
};

export default config;
