const got = require("got");

const REFRESH_TOKEN =
  "AQBGPG-o7LIJBcBwB-LtrfKI9nCMyb8CDrg8arZtILh-i3bAWEnrOqFcm7dY96_9HCsTtawltqwofMkQ80j9KTQXUP3Drw72zr07Hsl-p7bnogf1VJ_oH8Qy8xux8l78uLQ";

const getAccessToken = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", REFRESH_TOKEN);
  urlencoded.append("client_id", "c3421109cf9b48eaa9acb729888178fb");
  urlencoded.append("client_secret", "cef03eb4d66745d8817e949c7e6b5c86");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
  };

  let response = await fetch(
    "https://accounts.spotify.com/api/token",
    requestOptions
  );
  let data = await response.json();
  return data.access_token;
};

const URL = "https://api.spotify.com/v1/me/player/recently-played";

export default async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    const response = await fetch(URL, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const body = await response.json();
    const lastPlayed = body.items[0];
    res.status(200).send(lastPlayed);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: JSON.stringify(error) });
  }
};
