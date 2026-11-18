/**
 * Weekly deals. Leave isPlaceholder true until 80's Liquor supplies a real
 * name, size, price, and valid dates. The PLACEHOLDER tag renders only while
 * isPlaceholder is true. Do not invent products or prices.
 */
export interface Deal {
  id: string;
  name: string;
  size: string;
  price: string;
  valid: string;
  isPlaceholder: boolean;
}

export const DEALS_NOTICE =
  "Placeholder content. Real weekly deals to be supplied by 80’s Liquor.";

export const PLACEHOLDER_DEAL_LINE =
  "Deal name · size · price: owner to supply";

export const deals: Deal[] = [
  { id: "deal-1", name: "", size: "", price: "", valid: "", isPlaceholder: true },
  { id: "deal-2", name: "", size: "", price: "", valid: "", isPlaceholder: true },
  { id: "deal-3", name: "", size: "", price: "", valid: "", isPlaceholder: true },
  { id: "deal-4", name: "", size: "", price: "", valid: "", isPlaceholder: true },
  { id: "deal-5", name: "", size: "", price: "", valid: "", isPlaceholder: true },
];

export function dealLine(deal: Deal): string {
  if (deal.isPlaceholder) return PLACEHOLDER_DEAL_LINE;
  return `${deal.name} · ${deal.size} · ${deal.price}`;
}

export function dealValid(deal: Deal): string {
  if (deal.isPlaceholder) return "dates TBD";
  return deal.valid;
}
