import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
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
            width={80}
            height={80}
            priority
            sizes="(max-width: 899px) 52px, 76px"
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
        <div className="wrap">
          <p>{site.addressLine}</p>
        </div>
      </div>
    </header>
  );
}
