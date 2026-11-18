import type { Metadata } from "next";
import { CategoryList } from "@/components/Categories";
import { DealList } from "@/components/Deals";
import { Stripe } from "@/components/Stripe";
import { CATEGORY_NOTICE } from "@/content/categories";
import { DEALS_NOTICE, deals } from "@/content/deals";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Shop",
  description: `Stop in or call ${site.name} for what’s on the shelf. The weekly deals on this page are placeholders.`,
};

export default function ShopPage() {
  return (
    <div className="wrap">
      <div className="section">
        <h1 className="display">Shop</h1>
        <p className="lede">Stop in or call for what’s on the shelf.</p>
      </div>

      <section className="section" aria-labelledby="deals-heading">
        <h2 id="deals-heading">This week’s deals</h2>
        <p className="banner">{DEALS_NOTICE}</p>
        <DealList items={deals} />
      </section>

      <Stripe />

      <section className="section" aria-labelledby="categories-heading">
        <h2 id="categories-heading">Browse by category</h2>
        <p className="note">{CATEGORY_NOTICE}</p>
        <CategoryList />
      </section>

      <section className="section" aria-labelledby="call-heading">
        <h2 id="call-heading" className="sr-only">
          Call the store
        </h2>
        <p className="callout">
          Looking for something specific? Call{" "}
          <a className="call-phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
