/** Verified facts only. Anything not in the brief stays out of the UI. */

export const site = {
  name: "80’s Liquor",
  street: "890 E Broad St",
  city: "Athens",
  region: "GA",
  postalCode: "30601",
  addressLine: "890 E Broad St, Athens, GA 30601",
  headerLine: "890 E Broad St",
  phoneDisplay: "(706) 215-9341",
  phoneHref: "tel:+17062159341",
  email: "80sliquor@gmail.com",
  emailHref: "mailto:80sliquor@gmail.com",
  facebook: "https://facebook.com/796149373579680",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=890+E+Broad+St+Athens+GA+30601",
  googleListingUrl:
    "https://www.google.com/maps/search/?api=1&query=80%27s+Liquor+890+E+Broad+St+Athens+GA+30601",
  fireflyUrl: "https://athensclarkecounty.org/firefly",
  rating: {
    score: "5.0",
    count: 12,
    asOf: "Nov 2026",
  },
  geo: {
    latitude: 33.958292,
    longitude: -83.368666,
  },
  buildLabel: "Internal test build v1",
  unofficial:
    "Unofficial portfolio concept, not affiliated with 80’s Liquor.",
} as const;
