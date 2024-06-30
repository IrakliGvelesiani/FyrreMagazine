export async function getArticles() {
  const res = await fetch("./data/articles.json", { cache: "no-store" }); // Fetching article data from JSON file with no caching

  if (!res.ok) {
    throw new Error("Failed to fetch article data"); // Throw error if fetching data fails
  }

  return res.json(); // Return parsed JSON data
}
