import {
  aksum,
  baleMountain,
  danakil,
  gondar,
  harar,
  lalibela,
  omoValley,
  simienMountain,
  sofOmarCave,
} from "@/assets";

const destinations = [
  {
    name: "Lalibela",
    description:
      "Famous for its 11 rock-cut churches, Lalibela is a UNESCO site and a pilgrimage center for Ethiopian Orthodox Christians.",
    region: "Amhara",
    image: lalibela,
    attractions: ["Biete Medhane Alem", "Biete Giyorgis", "Biete Maryam"],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Aksum",
    description:
      "Known for ancient obelisks and the Church of Our Lady Mary of Zion, Aksum was once the capital of the Aksumite Empire.",
    region: "Tigray",
    image: aksum,
    attractions: [
      "Aksum Obelisk",
      "Queen of Sheba's Palace",
      "Church of Our Lady Mary of Zion",
    ],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Simien Mountains National Park",
    description:
      "A stunning natural landscape with jagged peaks and unique wildlife, ideal for trekking enthusiasts.",
    region: "Amhara",
    image: simienMountain,
    attractions: [
      "Ras Dashen (Ethiopia’s highest peak)",
      "Gelada Baboons",
      "Walia Ibex",
    ],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Gondar",
    description:
      "Known as the 'Camelot of Africa', Gondar features well-preserved castles from its royal past.",
    region: "Amhara",
    image: gondar,
    attractions: [
      "Fasil Ghebbi (Royal Enclosure)",
      "Fasilides' Bath",
      "Debre Berhan Selassie Church",
    ],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Omo Valley",
    description:
      "Renowned for its cultural diversity, home to various indigenous tribes with unique traditions.",
    region: "Southern Nations, Nationalities, and Peoples' Region",
    image: omoValley,
    attractions: ["Tribal Villages", "Colorful Markets", "Omo River"],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Danakil Depression",
    description:
      "One of the hottest places on Earth, featuring active volcanoes and colorful mineral deposits.",
    region: "Afar",
    image: danakil,
    attractions: ["Erta Ale Volcano", "Dallol Sulfur Springs", "Salt Flats"],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Bale Mountains National Park",
    description:
      "A wildlife sanctuary known for the rare Ethiopian wolf and breathtaking alpine landscapes.",
    region: "Oromia",
    image: baleMountain,
    attractions: ["Sanetti Plateau", "Ethiopian Wolf", "Harenna Forest"],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Harar",
    description:
      "A historic walled city known for its narrow alleys, vibrant markets, and unique hyena feeding tradition.",
    region: "Harari",
    image: harar,
    attractions: [
      "Harar Jugol (the old walled city)",
      "Hyena Feeding",
      "Arthur Rimbaud's House",
    ],
    rating: Math.floor(Math.random() * 5) + 1,
  },
  {
    name: "Sof Omar Caves",

    description:
      "Among Africa's largest cave systems, these caves are sacred to locals and feature stunning limestone formations.",
    region: "Oromia",
    image: sofOmarCave,
    attractions: ["Limestone Caves", "Wabi River", "Underground Chambers"],
    rating: Math.floor(Math.random() * 5) + 1,
  },
];

export { destinations };
