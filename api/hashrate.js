export default async function handler(req, res) {
  const { model = "s21" } = req.query;
  const HI_API_KEY = process.env.HI_API_KEY;

  const url = `https://api.hashrateindex.com/v1/hashrateindex/rigs/${model}`;

  try {
    const hiRes = await fetch(url, {
      headers: {
        Accept: "application/json",
        "X-Hi-Api-Key": HI_API_KEY,
      },
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(hiRes.status).json(await hiRes.json());
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Proxy error" });
  }
}
