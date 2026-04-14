export function SiteFooter() {
  return (
    <footer className="flex min-h-80 flex-col items-center justify-end gap-3 bg-background px-[clamp(20px,5vw,72px)] pb-13 pt-12 text-center text-xs">
      <p className="m-0 max-w-110 leading-[1.65] text-muted-foreground">
        Built with{" "}
        <a
          className="text-[#b4b4b4] transition-colors hover:text-foreground"
          href="https://ui.shadcn.com"
          target="_blank"
          rel="noreferrer"
        >
          shadcn/ui
        </a>{" "}
        and deployed on{" "}
        <a
          className="text-[#b4b4b4] transition-colors hover:text-foreground"
          href="https://vercel.com"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        .
      </p>
      <p className="m-0 max-w-110 leading-[1.65] text-muted-foreground">
        &copy; {new Date().getFullYear()} vngbh. All rights reserved.
      </p>
    </footer>
  );
}
