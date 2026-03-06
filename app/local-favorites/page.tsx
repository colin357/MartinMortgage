import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Local Favorites | Raleigh NC Restaurants & Businesses",
  description:
    "Discover the Martin Mortgage Group team\u2019s favorite local restaurants, shops, and businesses in the Raleigh-Durham area. Supporting the community we love to call home.",
  keywords: [
    "best restaurants Raleigh NC",
    "local businesses Raleigh",
    "Raleigh NC community",
    "things to do Raleigh Durham",
    "Triangle area restaurants",
    "Raleigh local favorites",
  ],
};

interface LocalSpot {
  name: string;
  category: string;
  description: string;
  neighborhood: string;
  highlight: string;
}

const restaurants: LocalSpot[] = [
  {
    name: "Beasley\u2019s Chicken + Honey",
    category: "Southern",
    description:
      "Chef Ashley Christensen\u2019s beloved fried chicken spot. The perfect comfort food after a long day of house hunting.",
    neighborhood: "Downtown Raleigh",
    highlight: "Best fried chicken in the Triangle",
  },
  {
    name: "Poole\u2019s Diner",
    category: "American",
    description:
      "An iconic Raleigh institution with creative Southern-inspired dishes and the famous mac and cheese.",
    neighborhood: "Downtown Raleigh",
    highlight: "Iconic mac & cheese",
  },
  {
    name: "The Pit Authentic Barbecue",
    category: "BBQ",
    description:
      "Whole-hog, pit-cooked barbecue in a stunning converted warehouse. A must-visit for anyone new to NC.",
    neighborhood: "Downtown Raleigh",
    highlight: "Whole-hog BBQ tradition",
  },
  {
    name: "Second Empire Restaurant",
    category: "Fine Dining",
    description:
      "Elegant dining in a historic Raleigh mansion. Perfect for celebrating closing day on your new home.",
    neighborhood: "Downtown Raleigh",
    highlight: "Celebrate closing day here",
  },
  {
    name: "Brewery Bhavana",
    category: "Brewery & Dim Sum",
    description:
      "A one-of-a-kind combination of craft brewery, dim sum restaurant, flower shop, and bookstore.",
    neighborhood: "Downtown Raleigh",
    highlight: "Unique brewery + dim sum",
  },
  {
    name: "Viceroy",
    category: "Indian Gastropub",
    description:
      "Upscale Indian-inspired gastropub with creative cocktails and shareable plates in a vibrant atmosphere.",
    neighborhood: "Peace Street, Raleigh",
    highlight: "Creative Indian-inspired cuisine",
  },
];

const businesses: LocalSpot[] = [
  {
    name: "Quail Ridge Books",
    category: "Bookstore",
    description:
      "Raleigh\u2019s beloved independent bookstore since 1984. A community gathering place with author events and local charm.",
    neighborhood: "North Hills, Raleigh",
    highlight: "Raleigh\u2019s favorite indie bookstore",
  },
  {
    name: "Raleigh Denim Workshop",
    category: "Artisan Clothing",
    description:
      "Handcrafted denim made right here in Raleigh. A perfect example of the local craftsmanship our city is known for.",
    neighborhood: "Downtown Raleigh",
    highlight: "Locally made premium denim",
  },
  {
    name: "The Raleigh Farmers Market",
    category: "Farmers Market",
    description:
      "Fresh local produce, meats, baked goods, and plants. A Saturday morning staple for Triangle families.",
    neighborhood: "South Raleigh",
    highlight: "Weekend family tradition",
  },
  {
    name: "Videri Chocolate Factory",
    category: "Artisan Chocolate",
    description:
      "Bean-to-bar chocolate made in a converted Raleigh warehouse. Free factory tours and amazing hot chocolate.",
    neighborhood: "Warehouse District, Raleigh",
    highlight: "Bean-to-bar chocolate tours",
  },
  {
    name: "Trophy Brewing",
    category: "Craft Brewery",
    description:
      "Award-winning local craft brewery with multiple locations and a stellar pizza program.",
    neighborhood: "Multiple Raleigh locations",
    highlight: "Award-winning local brews",
  },
  {
    name: "Deco Raleigh",
    category: "Home Decor & Gifts",
    description:
      "Curated home decor, gifts, and accessories. The perfect place to shop for your new home.",
    neighborhood: "Downtown Raleigh",
    highlight: "Furnish your new home",
  },
];

function SpotCard({ spot }: { spot: LocalSpot }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow group">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-sans text-lg font-black text-gray-900 group-hover:text-gray-700 transition-colors">
            {spot.name}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs font-medium text-accent-500 bg-accent-50 px-2.5 py-0.5 rounded-full">
              {spot.category}
            </span>
            <span className="text-xs text-gray-400">{spot.neighborhood}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed mb-3">
        {spot.description}
      </p>
      <div className="flex items-center gap-2 text-xs text-accent-500 font-medium">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {spot.highlight}
      </div>
    </div>
  );
}

export default function LocalFavoritesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/3" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-400/20 rounded-full mb-6">
            <span className="text-accent-500 text-sm font-medium">
              Community Picks
            </span>
          </span>
          <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
            Our Favorite Local
            <span className="text-accent-500"> Spots in Raleigh</span>
          </h1>
          <p className="text-primary-100 text-lg leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just help you find a house &mdash; we help you find a
            home. Here are some of the places our team loves most in the
            Raleigh-Durham area.
          </p>
        </div>
      </section>

      {/* Restaurants */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Where We Eat
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Restaurants We Love
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From legendary BBQ to award-winning fine dining, these are the
              spots our team recommends to every new homeowner in the Triangle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((spot) => (
              <SpotCard key={spot.name} spot={spot} />
            ))}
          </div>
        </div>
      </section>

      {/* Businesses */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Where We Shop
            </span>
            <h2 className="font-sans text-3xl md:text-4xl font-black text-gray-900 mt-2 mb-4">
              Local Businesses We Support
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              These are the local gems that make Raleigh such a special place to
              live. We&apos;re proud to be part of this community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map((spot) => (
              <SpotCard key={spot.name} spot={spot} />
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800" />
        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-sans text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Call Raleigh Home?
          </h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Let the Martin Mortgage Group help you put down roots in one of
            the best cities in the Southeast. Get pre-qualified today and start
            exploring your new neighborhood.
          </p>
          <a href="/purchase" className="btn-gold text-base">
            Get Pre-Qualified
          </a>
        </div>
      </section>
    </>
  );
}
