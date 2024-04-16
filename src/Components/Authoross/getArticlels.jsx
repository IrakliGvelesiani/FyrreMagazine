export async function getArticles() {
  const res = await fetch("./data/articles.json", { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch article data");
  }

  return res.json();
}
