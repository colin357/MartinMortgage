import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raleigh Local Business & Restaurant Recommendations",
  description:
    "A curated list of Raleigh businesses and restaurants recommended by Martin Mortgage Group.",
  keywords: ["Raleigh local businesses", "Raleigh restaurants", "Raleigh relocation guide"]
};

const recommendations = {
  restaurants: [
    ["Brewery Bhavana", "Modern dim sum and craft beer in downtown Raleigh."],
    ["Poole's Diner", "Classic Southern comfort food with upscale execution."],
    ["Second Empire", "Fine dining in a historic Raleigh home."]
  ],
  businesses: [
    ["Edge of Urge", "Locally loved gift boutique supporting regional makers."],
    ["House of Swank", "Raleigh apparel and local pride merchandise."],
    ["Logan's Garden Shop", "Trusted gardening and landscaping resource for homeowners."]
  ]
};

export default function LocalRecommendationsPage() {
  return (
    <main className="container" style={{ padding: "2rem 0" }}>
      <section className="section-card">
        <span className="badge">Live Like a Local</span>
        <h1>Raleigh favorites from the Martin Mortgage Group team</h1>
        <p>
          Beyond mortgages, we love helping clients settle into Raleigh. Here are a few local restaurants
          and small businesses we recommend to new homeowners.
        </p>
      </section>

      <section className="grid-2" style={{ marginTop: "1rem" }}>
        <article className="section-card">
          <h2>Restaurants</h2>
          <ul>
            {recommendations.restaurants.map(([name, desc]) => (
              <li key={name}>
                <strong>{name}</strong>: {desc}
              </li>
            ))}
          </ul>
        </article>
        <article className="section-card">
          <h2>Local Businesses</h2>
          <ul>
            {recommendations.businesses.map(([name, desc]) => (
              <li key={name}>
                <strong>{name}</strong>: {desc}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
