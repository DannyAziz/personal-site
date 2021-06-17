// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const got = require("got");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export default async (req, res) => {
  const today = new Date();
  const response = await got("https://github.com/dannyaziz");
  const dom = new JSDOM(response.body);

  var elem = dom.window.document.querySelector(
    `.ContributionCalendar-day[data-date="${
      today.toISOString().split("T")[0]
    }"]`
  );

  res.status(200).send({ codeToday: elem.dataset.count !== 0 });
};
