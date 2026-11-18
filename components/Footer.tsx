import { HOURS_ROWS } from "@/content/hours";
import { site } from "@/content/site";
import { ExternalLink } from "@/components/ExternalLink";
import { Stripe } from "@/components/Stripe";

export function Footer() {
  return (
    <footer className="site-footer">
      <Stripe />
      <div className="wrap footer-grid">
        <address>
          <span className="footer-name">{site.name}</span>
          <span>{site.street}</span>
          <span>
            {site.city}, {site.region} {site.postalCode}
          </span>
          <a className="slide-link" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <a className="slide-link" href={site.emailHref}>
            {site.email}
          </a>
        </address>
        <div className="footer-hours">
          <p className="footer-label">Hours</p>
          <ul className="footer-hours-list">
            {HOURS_ROWS.map((row) => (
              <li key={row.id}>
                {row.short} {row.opens}–{row.closes}
              </li>
            ))}
          </ul>
          <ExternalLink href={site.facebook} className="slide-link">
            Facebook
          </ExternalLink>
        </div>
      </div>
      <div className="wrap fineprint">
        <p>{site.unofficial}</p>
        <p>{site.buildLabel}</p>
      </div>
    </footer>
  );
}
