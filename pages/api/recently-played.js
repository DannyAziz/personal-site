const got = require("got");

const BEARER_TOKEN =
  "Bearer BQDQUnjA7QvLb6N1gstQUg8n5trmQ5speydpCKZIFT8URMyGGkUz_XnelMiqPnf_jdUaGd7KXWGEMlq5foWU9-7HQlcffaF1rU9yALrrkvvD7M8vLdSB4P0H9kf5DvgbPr3hJ6wNARQBZnCeqWyGLg";

const URL = "https://api.spotify.com/v1/me/player/recently-played";

export default async (req, res) => {
  const response = await got(URL, {
    headers: { Authorization: BEARER_TOKEN }
  }).json();
  const lastPlayed = response.items[0];
  res.status(200).send(lastPlayed);
};
