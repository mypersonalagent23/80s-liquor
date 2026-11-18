import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { ExternalLink } from "@/components/ExternalLink";
import { Nav } from "@/components/Nav";
import { StoreStatus } from "@/components/StoreStatus";
import { Stripe } from "@/components/Stripe";

export function Header() {
  return (
    <header className="site-header">
      <Stripe />
      <div className="wrap header-bar">
        <Link href="/" className="logo-link">
          <Image
            src="/logo-512.png"
            alt="80’s Liquor"
            width={56}
            height={56}
            priority
            sizes="56px"
            className="logo"
          />
        </Link>
        <Nav />
        <div className="header-meta">
          <StoreStatus />
          <a className="header-phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="header-line">
        <p className="wrap">
          {site.headerLine}
          <span aria-hidden="true"> · </span>
          <span className="sr-only">, </span>
          next to the{" "}
          <ExternalLink href={site.fireflyUrl} className="slide-link">
            Firefly Trail trailhead
          </ExternalLink>
        </p>
      </div>
    </header>
  );
}
