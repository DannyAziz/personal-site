// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${process.env.PRODUCT_HUNT_TOKEN}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  let response = await fetch(
    "https://api.producthunt.com/v1/me/",
    requestOptions
  );
  let data = await response.json();
  res.status(200).send({ product: data.user.maker_of[0] });
};
