import type { Metadata } from "next";
import Link from "next/link";
import { DealList } from "@/components/Deals";
import { ExternalLink } from "@/components/ExternalLink";
import { HoursBoard } from "@/components/HoursBoard";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Stripe } from "@/components/Stripe";
import { DEALS_NOTICE, deals } from "@/content/deals";
import { HOURS_ROWS } from "@/content/hours";
import { site } from "@/content/site";

export const metadata: Metadata = {
  description: `${site.name} is a package store at ${site.addressLine}, in a building that was a tire shop until 2025. Next to the Firefly Trail trailhead. ${site.phoneDisplay}.`,
};

export default function HomePage() {
  return (
    <>
      <div className="wrap hero">
        <div className="hero-copy">
          <h1 className="display">
            Downtown Athens’ package store, in the old tire shop on E Broad.
          </h1>
          <p>{site.addressLine}</p>
          <p className="hero-hours">
            {HOURS_ROWS.map((row, index) => (
              <span key={row.id}>
                {row.short} {row.opens}–{row.closes}
                {index < HOURS_ROWS.length - 1 ? " ·" : ""}
              </span>
            ))}
          </p>
          <div className="actions">
            <Link className="btn btn-pink" href="/shop">
              This week’s deals
            </Link>
            <ExternalLink className="btn btn-line" href={site.directionsUrl}>
              Get directions
            </ExternalLink>
          </div>
        </div>
        <PhotoPlaceholder
          className="hero-frame"
          label="Exterior photo: owner to supply"
          ratio="4 / 5"
        />
      </div>

      <Stripe />

      <div className="wrap">
        <div className="glance-top">
          <div className="glance-deals">
            <h2>This week’s deals</h2>
            <p className="note">{DEALS_NOTICE}</p>
            <DealList items={deals.slice(0, 2)} stacked />
            <p>
              <Link className="slide-link" href="/shop">
                See this week’s deals
              </Link>
            </p>
          </div>
          <div className="glance-hours">
            <HoursBoard />
          </div>
        </div>
        <div className="glance-building">
          <h2>The building</h2>
          <p>
            The building at {site.street} was a tire shop in downtown Athens. In 2025 it
            was renovated into a package store.
          </p>
          <Link className="slide-link" href="/about">
            The building’s story
          </Link>
        </div>
      </div>

      <Stripe />

      <div className="wrap">
        <p className="rating">
          <ExternalLink className="slide-link" href={site.googleListingUrl}>
            <span className="rating-score">{site.rating.score}</span> on Google ·{" "}
            {site.rating.count} reviews
          </ExternalLink>
          <span className="rating-asof">as of {site.rating.asOf}</span>
        </p>
        <Link className="timeline-link" href="/about">
          <span className="ticket timeline">
            <span className="timeline-lead">Before: tire shop → 2025: package store.</span>
            <span className="timeline-meta">Athens-Clarke County plans review, April 2025.</span>
          </span>
        </Link>
      </div>
    </>
  );
}
