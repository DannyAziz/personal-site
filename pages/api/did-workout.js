// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const got = require("got");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default async (req, res) => {
  let didWorkout = false;
  const today = new Date();
  const response = await got("https://gyrosco.pe/daanyaal997/helix/fitness/");
  const dom = new JSDOM(response.body);

  let monthDays = dom.window.document.querySelectorAll("div.month-day");
  let todayElem = monthDays[today.getDate() - 1];
  Array.prototype.slice.call(todayElem.children).forEach((item) => {
    if (item.className.includes("gym")) {
      didWorkout = true;
    }
  });

  res.status(200).send({ didWorkout });
};