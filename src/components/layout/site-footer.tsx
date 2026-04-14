export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <p className="siteFooterBrand">myhub</p>
      <p className="siteFooterDesc">
        A personal portfolio site. Built with{" "}
        <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
          shadcn/ui
        </a>{" "}
        and deployed on{" "}
        <a href="https://vercel.com" target="_blank" rel="noreferrer">
          Vercel
        </a>
        . Design inspired by{" "}
        <a href="https://supabase.com" target="_blank" rel="noreferrer">
          Supabase
        </a>
        .
      </p>
    </footer>
  );
}
