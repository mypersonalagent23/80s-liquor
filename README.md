# 80's Liquor

Unofficial portfolio site for 80's Liquor, a package store at 890 E Broad St, Athens, GA. The store has not commissioned it. Pages stay `noindex` until a real launch.

Internal test build v1.

## Pages

- `/` Home
- `/shop` Shop (placeholder deals and categories, no cart)
- `/visit` Visit
- `/about` About

No age gate, forms, checkout, analytics, cookies, or embedded maps.

## Run

```bash
npm install
npm run dev
npm test
npm run typecheck
npm run lint
npm run build
```

Node 22. Open and closed state is a pure function in `content/hours.ts`, tested in `tests/hours.test.ts`, using `America/New_York`.

## Facts on the site

Only these, from the build brief:

| | |
| --- | --- |
| Name | 80's Liquor |
| Address | 890 E Broad St, Athens, GA 30601 |
| Phone | (706) 215-9341 |
| Email | 80sliquor@gmail.com |
| Facebook | https://facebook.com/796149373579680 |
| Google | 5.0 from 12 reviews, as of Nov 2026 |
| Hours | Mon–Wed 10am–10:30pm · Thu–Sat 10am–11:30pm · Sun 12:30pm–8pm |
| Store | Downtown Athens package and liquor store at 890 E Broad St. Beer, wine, liquor, and weekly deals. No construction history on the site. |
| Location | 890 E Broad St. The Firefly Trail is mentioned once, on Visit. |

Coordinates 33.958292, -83.368666 are stored on `site.geo` for a future launch and are not printed.

### Sources

- Firefly Trail, linked once from the Visit page: https://athensclarkecounty.org/firefly
- Directions use the address query specified in the brief: `https://www.google.com/maps/search/?api=1&query=890+E+Broad+St+Athens+GA+30601`

## Logo and color

`logo/logo.png` is the official artwork, used as supplied. The header serves `public/logo-512.png`. Favicons are the files supplied with the brief.

Accent colors were resampled from that PNG, not from the older sign-photo tokens in the brief:

| Token | Value | Use |
| --- | --- | --- |
| Pink | `#FB305D` | Three-line stripe |
| Pink, deepened | `#D3284E` | Button fill, so white type clears 5:1 |
| Yellow | `#FCBA00` | Stripe and PLACEHOLDER tags (ink type on yellow) |
| Teal | `#1ED2CC` | Stripe and the Open chip (ink type on teal) |
| Teal, for links | `#096360` | Body links on white |
| Near-black | `#212123` | Text |
| Cream | `#FCF6E4` | Today's row and the deals notice |

## Search engines

`app/robots.ts` disallows `/`. The root layout sets `robots: { index: false, follow: false }`. `next.config.ts` sends `X-Robots-Tag: noindex, nofollow`. JSON-LD is intentionally omitted until launch.

## Owner to confirm

Do not publish any of this as fact until the owner confirms it.

1. Whether an unofficial or official site is OK, and who the contact is.
2. Owner or manager name, the story in their words, founding date, and opening date.
3. Categories carried, brands or local picks.
4. How weekly deals are produced, who sends them, and the format.
5. Photos of the store, and the owner’s story in their own words.
6. Parking, payment methods, delivery or curbside, special orders.
7. Instagram or other social accounts. Facebook bio text.
8. Whether the listed hours are current, and holiday hours.
9. Whether they want an age notice. Georgia retail alcohol advertising rules are for the owner or counsel to check before launch.
10. Permission to use the sign artwork.
11. Custom domain, and which email address to display.

See `PLACEHOLDERS.md` for what the pages already mark as unknown.
