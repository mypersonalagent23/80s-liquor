import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Stripe } from "@/components/Stripe";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} is a package store at ${site.addressLine}. The building was renovated in 2025.`,
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <header className="about-quote">
        <h1 className="display">Renovated in 2025.</h1>
        <p className="attrib">
          {site.name}, {site.addressLine}.
        </p>
      </header>

      <Stripe />

      <div className="about-grid">
        <div className="prose">
          <p>
            {site.name} is a package store at {site.street} in downtown Athens.
          </p>
          <p>
            In 2025 the building was renovated into a package store (
            <ExternalLink className="slide-link" href={site.plansReviewUrl}>
              Athens-Clarke County plans review, April 2025
            </ExternalLink>
            ).
          </p>
          <p>
            <ExternalLink className="slide-link" href={site.contractorUrl}>
              Garland & Associates Contractors
            </ExternalLink>
            , the contractor, says that apart from some of the exterior block it is
            essentially a new building.
          </p>
          <section className="ticket has-tag owner-block" aria-labelledby="owner-heading">
            <span className="tag">PLACEHOLDER</span>
            <h2 id="owner-heading">Meet the owner</h2>
            <p>Owner name and story to come.</p>
          </section>
        </div>
        <div className="about-photos">
          <PhotoPlaceholder label="Building photo, owner to supply" ratio="3 / 2" />
          <PhotoPlaceholder label="Photo, owner to supply" ratio="3 / 2" />
        </div>
      </div>

      <section className="sources" aria-labelledby="sources-heading">
        <h2 id="sources-heading">Sources</h2>
        <ul>
          <li>
            <ExternalLink className="slide-link" href={site.plansReviewUrl}>
              Athens-Clarke County plans review agenda, April 10, 2025
            </ExternalLink>
          </li>
          <li>
            <ExternalLink className="slide-link" href={site.contractorUrl}>
              Garland & Associates Contractors, LinkedIn, October 2025
            </ExternalLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
