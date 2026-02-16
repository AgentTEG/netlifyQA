export default async function handler(req, res) {
  return new Response("Hello World from Netlify Function!", {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}