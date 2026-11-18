/**
 * Generic liquor-store categories. isPlaceholder stays true until the owner
 * confirms the store carries that category. No counts and no brand claims.
 */
export interface Category {
  id: string;
  name: string;
  isPlaceholder: boolean;
}

export const CATEGORY_NOTICE =
  "Categories are placeholders pending owner confirmation.";

export const categories: Category[] = [
  { id: "whiskey-bourbon", name: "Whiskey & Bourbon", isPlaceholder: true },
  { id: "vodka", name: "Vodka", isPlaceholder: true },
  { id: "tequila", name: "Tequila", isPlaceholder: true },
  { id: "rum", name: "Rum", isPlaceholder: true },
  { id: "gin", name: "Gin", isPlaceholder: true },
  { id: "wine", name: "Wine", isPlaceholder: true },
  { id: "beer", name: "Beer", isPlaceholder: true },
  {
    id: "seltzers",
    name: "Seltzers & Ready-to-Drink",
    isPlaceholder: true,
  },
  { id: "mixers", name: "Mixers & Snacks", isPlaceholder: true },
];
