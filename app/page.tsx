import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DealList } from "@/components/Deals";
import { ExternalLink } from "@/components/ExternalLink";
import { HoursBoard } from "@/components/HoursBoard";
import { Memphis } from "@/components/Memphis";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { DEALS_NOTICE, deals } from "@/content/deals";
import { HOURS_ROWS } from "@/content/hours";
import { site } from "@/content/site";

export const metadata: Metadata = {
  description: `${site.name} is downtown Athens’ package and liquor store at ${site.addressLine}. ${site.phoneDisplay}.`,
};

export default function HomePage() {
  return (
    <>
      <div className="wrap hero">
        <div className="hero-copy">
          <Image
            className="hero-mark"
            src="/logo-512.png"
            alt=""
            width={160}
            height={160}
            priority
            sizes="(max-width: 879px) 88px, 132px"
          />
          <h1 className="display display-pop">
            Downtown Athens’ package & liquor store.
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

      <div className="wrap">
        <Memphis />
      </div>

      <div className="wrap home-lower">
        <div className="glance">
          <div className="glance-top">
            <div className="glance-deals">
              <h2>This week’s deals</h2>
              <p className="note">{DEALS_NOTICE}</p>
              <DealList items={deals.slice(0, 3)} stacked />
              <p className="glance-more">
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
            <h2>On the shelf</h2>
            <p>Beer, wine, and liquor, plus weekly deals.</p>
            <Link className="slide-link" href="/about">
              About the store
            </Link>
          </div>
        </div>
      </div>

      <div className="wrap">
        <p className="rating">
          <ExternalLink className="slide-link" href={site.googleListingUrl}>
            <span className="rating-score">{site.rating.score}</span> on Google ·{" "}
            {site.rating.count} reviews
          </ExternalLink>
          <span className="rating-asof">as of {site.rating.asOf}</span>
        </p>
      </div>
    </>
  );
}
