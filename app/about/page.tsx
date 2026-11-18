import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Stripe } from "@/components/Stripe";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `The building at ${site.street} was a tire shop. In 2025 it was renovated into a package store, ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <header className="about-quote">
        <h1 className="display">
          From rubber, oil, and wrenches to retro vibes and fine spirits.
        </h1>
        <p className="attrib">
          <ExternalLink className="slide-link" href={site.contractorUrl}>
            Garland & Associates Contractors, Oct 2025 (LinkedIn)
          </ExternalLink>
        </p>
      </header>

      <Stripe />

      <div className="about-grid">
        <div className="prose">
          <p>The building at {site.street} was a tire shop in downtown Athens.</p>
          <p>
            In 2025 it was renovated and changed from a tire shop to a package store (
            <ExternalLink className="slide-link" href={site.plansReviewUrl}>
              Athens-Clarke County plans review, April 2025
            </ExternalLink>
            ).
          </p>
          <p>
            The contractor says that, apart from some of the exterior block, it is
            essentially a new building.
          </p>
          <p>
            It sits next to the{" "}
            <ExternalLink className="slide-link" href={site.fireflyUrl}>
              Firefly Trail downtown trailhead
            </ExternalLink>
            .
          </p>
          <section className="ticket has-tag owner-block" aria-labelledby="owner-heading">
            <span className="tag">PLACEHOLDER</span>
            <h2 id="owner-heading">Meet the owner</h2>
            <p>Owner name and story to come.</p>
          </section>
        </div>
        <div className="about-photos">
          <PhotoPlaceholder
            label="Before (tire shop) photo, owner to supply"
            ratio="3 / 2"
          />
          <PhotoPlaceholder label="After photo, owner to supply" ratio="3 / 2" />
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
          <li>
            <ExternalLink className="slide-link" href={site.fireflyUrl}>
              Firefly Trail, Athens-Clarke County
            </ExternalLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
