export async function getPodcasts() {
  const res = await fetch("./data/podcasts.json", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch podcast data");
  }

  return res.json();
}
