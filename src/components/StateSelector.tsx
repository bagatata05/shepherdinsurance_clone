import React, { useState } from "react";

interface ProductAvailability {
  name: string;
  checked: boolean;
}

interface StateData {
  code: string;
  name: string;
  products: ProductAvailability[];
}

const statesData: StateData[] = [
  {
    code: "ak",
    name: "Alaska",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "al",
    name: "Alabama",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ar",
    name: "Arkansas",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "az",
    name: "Arizona",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ca",
    name: "California",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "co",
    name: "Colorado",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ct",
    name: "Connecticut",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "dc",
    name: "District of Columbia",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "de",
    name: "Delaware",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "fl",
    name: "Florida",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ga",
    name: "Georgia",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "hi",
    name: "Hawaii",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ia",
    name: "Iowa",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "id",
    name: "Idaho",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "il",
    name: "Illinois",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "in",
    name: "Indiana",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ks",
    name: "Kansas",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ky",
    name: "Kentucky",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "la",
    name: "Louisiana",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ma",
    name: "Massachusetts",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "md",
    name: "Maryland",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "me",
    name: "Maine",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "mi",
    name: "Michigan",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "mn",
    name: "Minnesota",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "mo",
    name: "Missouri",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ms",
    name: "Mississippi",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "mt",
    name: "Montana",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "nc",
    name: "North Carolina",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "nd",
    name: "North Dakota",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: false,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ne",
    name: "Nebraska",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "nh",
    name: "New Hampshire",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "nj",
    name: "New Jersey",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "nm",
    name: "New Mexico",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "nv",
    name: "Nevada",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ny",
    name: "New York",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: false,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: false,
      },
      {
        name: "Commercial Auto",
        checked: false,
      },
      {
        name: "Workers&#x27; Comp",
        checked: false,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "oh",
    name: "Ohio",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: false,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ok",
    name: "Oklahoma",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "or",
    name: "Oregon",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "pa",
    name: "Pennsylvania",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ri",
    name: "Rhode Island",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "sc",
    name: "South Carolina",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "sd",
    name: "South Dakota",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "tn",
    name: "Tennessee",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "tx",
    name: "Texas",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "ut",
    name: "Utah",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "va",
    name: "Virginia",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "vt",
    name: "Vermont",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "wa",
    name: "Washington",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: false,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "wi",
    name: "Wisconsin",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "wv",
    name: "West Virginia",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: true,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
  {
    code: "wy",
    name: "Wyoming",
    products: [
      {
        name: "Primary GL (Admitted)",
        checked: true,
      },
      {
        name: "Primary GL (Non-Admitted)",
        checked: true,
      },
      {
        name: "Commercial Auto",
        checked: true,
      },
      {
        name: "Workers&#x27; Comp",
        checked: false,
      },
      {
        name: "Excess",
        checked: true,
      },
      {
        name: "Builder&#x27;s Risk",
        checked: true,
      },
    ],
  },
];

export const StateSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState<StateData | null>(
    statesData.find((s) => s.code === "ca") || statesData[0],
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectState = (state: StateData) => {
    setSelectedState(state);
    setIsOpen(false);
  };

  return (
    <section className="u-section u-theme-beige">
      <div className="section_spacer">
        <div className="u-container">
          <div className="u-content v-flex-8">
            <div className="content-flex v-flex-8">
              <div className="products-overview-grid u-grid-custom">
                {/* Left Column: Title and Dropdown */}
                <div className="solution-right-flex">
                  <div data-max="ch16" className="u-text-style-h3">
                    Select state to view product availability
                  </div>
                  <div
                    className="dropdown-wrap"
                    style={{ position: "relative" }}
                  >
                    <button
                      onClick={toggleDropdown}
                      className="dropdown-btn is-top w-full text-left flex justify-between items-center"
                      type="button"
                    >
                      <div className="u-text-style-small uppercase">
                        {selectedState ? selectedState.name : "SELECT STATE"}
                      </div>
                      <div
                        className={`div-block-14 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20.031 9.53104L12.531 17.031C12.4614 17.1008 12.3787 17.1561 12.2876 17.1938C12.1966 17.2316 12.099 17.251 12.0004 17.251C11.9019 17.251 11.8043 17.2316 11.7132 17.1938C11.6222 17.1561 11.5394 17.1008 11.4698 17.031L3.96979 9.53104C3.82906 9.39031 3.75 9.19944 3.75 9.00042C3.75 8.80139 3.82906 8.61052 3.96979 8.46979C4.11052 8.32906 4.30139 8.25 4.50042 8.25C4.69944 8.25 4.89031 8.32906 5.03104 8.46979L12.0004 15.4401L18.9698 8.46979C19.0395 8.40011 19.1222 8.34483 19.2132 8.30712C19.3043 8.26941 19.4019 8.25 19.5004 8.25C19.599 8.25 19.6965 8.26941 19.7876 8.30712C19.8786 8.34483 19.9614 8.40011 20.031 8.46979C20.1007 8.53947 20.156 8.6222 20.1937 8.71324C20.2314 8.80429 20.2508 8.90187 20.2508 9.00042C20.2508 9.09896 20.2314 9.19654 20.1937 9.28759C20.156 9.37863 20.1007 9.46136 20.031 9.53104Z"
                            fill="black"
                          ></path>
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        className="dropdown-bottom"
                        style={{
                          display: "block",
                          position: "absolute",
                          width: "100%",
                          zIndex: 10,
                        }}
                      >
                        <div
                          data-lenis-prevent=""
                          className="dropdown-btn is-bottom"
                          style={{ maxHeight: "300px", overflowY: "auto" }}
                        >
                          <div className="w-dyn-list">
                            <div
                              role="list"
                              className="state-dropdown-list w-dyn-items"
                            >
                              {statesData.map((state) => (
                                <div
                                  key={state.code}
                                  onClick={() => selectState(state)}
                                  role="listitem"
                                  className="state-dropdown-item w-dyn-item cursor-pointer hover:bg-neutral-100"
                                >
                                  <div className="products-flex">
                                    <div className="checkmark">
                                      <div className="solution-check is-dropdown">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="100%"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          className="check-svg"
                                        >
                                          <path
                                            d="M3.5 10L7 13.3094L14.5 4"
                                            stroke="white"
                                            strokeWidth="2"
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="check-txt u-text-style-large">
                                      {state.name}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: State details checkmarks */}
                <div>
                  <div className="w-dyn-list">
                    <div role="list" className="states-list w-dyn-items">
                      {statesData.map((state) => {
                        const isActive =
                          selectedState && selectedState.code === state.code;
                        return (
                          <div
                            key={state.code}
                            data-state={state.code}
                            role="listitem"
                            className={`states-item w-dyn-item ${isActive ? "is-active" : ""}`}
                            style={{ display: isActive ? "flex" : "none" }}
                          >
                            <div className="states-top">
                              <div>
                                <div className="u-text-style-h4">
                                  {state.name}
                                </div>
                              </div>
                            </div>
                            <div className="products-details-flex">
                              {state.products.map((prod, idx) => (
                                <div key={idx} className="products-flex">
                                  <div className="checkmark">
                                    <div
                                      className={`solution-check ${!prod.checked ? "w-condition-invisible" : ""}`}
                                    >
                                      {prod.checked && (
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="100%"
                                          viewBox="0 0 18 18"
                                          fill="none"
                                          className="check-svg"
                                        >
                                          <path
                                            d="M3.5 10L7 13.3094L14.5 4"
                                            stroke="white"
                                            strokeWidth="2"
                                          ></path>
                                        </svg>
                                      )}
                                    </div>
                                  </div>
                                  <div
                                    className="check-txt u-text-style-large"
                                    dangerouslySetInnerHTML={{
                                      __html: prod.name,
                                    }}
                                  ></div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
