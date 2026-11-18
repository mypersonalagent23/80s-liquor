import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "@/components/ExternalLink";
import { HoursTable } from "@/components/HoursTable";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a downtown Athens package and liquor store at ${site.addressLine}. Beer, wine, liquor, and weekly deals. ${site.phoneDisplay}. ${site.rating.score} on Google from ${site.rating.count} reviews, as of ${site.rating.asOf}.`,
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <header className="about-quote">
        <h1 className="display">Beer, wine, and liquor.</h1>
        <p className="attrib">
          {site.name} is a downtown Athens package and liquor store at {site.street}.
        </p>
      </header>

      <div className="about-grid">
        <div className="prose">
          <p>
            Come in for beer, wine, and liquor. Weekly deals are listed on the{" "}
            <Link className="slide-link" href="/shop">
              shop page
            </Link>
            .
          </p>
          <p>
            <a className="slide-link" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </p>
          <p>
            <ExternalLink className="slide-link" href={site.googleListingUrl}>
              {site.rating.score} on Google · {site.rating.count} reviews
            </ExternalLink>
            <span className="rating-asof"> as of {site.rating.asOf}</span>
          </p>
          <HoursTable />
          <section className="ticket has-tag owner-block" aria-labelledby="owner-heading">
            <span className="tag">PLACEHOLDER</span>
            <h2 id="owner-heading">Meet the owner</h2>
            <p>Owner name and story to come.</p>
          </section>
        </div>
        <PhotoPlaceholder label="Store photo, owner to supply" ratio="3 / 2" />
      </div>
    </div>
  );
}
