import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { HoursTable } from "@/components/HoursTable";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Stripe } from "@/components/Stripe";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Visit",
  description: `${site.name}, ${site.addressLine}. Next to the Firefly Trail downtown trailhead. ${site.phoneDisplay}.`,
};

export default function VisitPage() {
  return (
    <div className="wrap">
      <div className="visit-top">
        <h1 className="display address-display">{site.street}</h1>
        <p className="city">
          {site.city}, {site.region} {site.postalCode}
        </p>
        <p className="trail-line">
          Next to the{" "}
          <ExternalLink className="slide-link" href={site.fireflyUrl}>
            Firefly Trail downtown trailhead
          </ExternalLink>
          .
        </p>
        <ExternalLink className="btn btn-pink" href={site.directionsUrl}>
          Get directions
        </ExternalLink>
      </div>

      <Stripe />

      <section className="hours-block" aria-labelledby="hours-heading">
        <h2 id="hours-heading">Hours</h2>
        <HoursTable />
        <p className="holiday-note">
          Hours may change on holidays.{" "}
          <a className="slide-link" href={site.phoneHref}>
            Call
          </a>{" "}
          to confirm.
        </p>
      </section>

      <section className="contact-block" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Phone, email, Facebook</h2>
        <ul className="contacts">
          <li>
            <a className="slide-link" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            <a className="slide-link" href={site.emailHref}>
              {site.email}
            </a>
          </li>
          <li>
            <ExternalLink className="slide-link" href={site.facebook}>
              Facebook
            </ExternalLink>
          </li>
        </ul>
      </section>

      <section className="map-block">
        <PhotoPlaceholder
          className="map-frame"
          label="Map placeholder"
          ratio="16 / 9"
          heading
        >
          <p>
            {site.street}
            <br />
            {site.city}, {site.region} {site.postalCode}
          </p>
          <ExternalLink className="btn btn-line" href={site.directionsUrl}>
            Get directions
          </ExternalLink>
        </PhotoPlaceholder>
      </section>
    </div>
  );
}
