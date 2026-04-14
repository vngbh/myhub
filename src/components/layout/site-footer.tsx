export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <p className="siteFooterDesc">
        Built with{" "}
        <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
          shadcn/ui
        </a>{" "}
        and deployed on{" "}
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          Vercel
        </a>
        .
      </p>
      <p className="siteFooterDesc">
        &copy; {new Date().getFullYear()} vngbh. All rights reserved.
      </p>
    </footer>
  );
}
