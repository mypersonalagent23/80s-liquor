import { dealLine, dealValid, type Deal } from "@/content/deals";

export function DealList({
  items,
  stacked = false,
}: {
  items: Deal[];
  stacked?: boolean;
}) {
  return (
    <ul className={stacked ? "deals deals-stack" : "deals"}>
      {items.map((deal) => (
        <li key={deal.id} className={deal.isPlaceholder ? "ticket has-tag" : "ticket"}>
          {deal.isPlaceholder ? <span className="tag">PLACEHOLDER</span> : null}
          <p className="deal-line">{dealLine(deal)}</p>
          <p className="deal-valid">Valid: {dealValid(deal)}</p>
        </li>
      ))}
    </ul>
  );
}
