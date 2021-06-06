// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default async (req, res) => {
  const response = await got('https://gyrosco.pe/daanyaal997/helix/fitness/');
  const dom = new JSDOM(response.body);
  res.status(200).send({ok: true});
}
