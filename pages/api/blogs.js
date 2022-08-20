// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";

export default async function handler(req, res) {
  // fs.promises.readdir("blogdata", (err, data) => {
  //   console.log(data);
  //   //  data:   [
  //   //   "how-to-learn-flask.json",
  //   //   "how-to-learn-js.json",
  //   //   "how-to-learn-nextjs.json"
  //   // ]
  //   let allBlogs = [];
  //   data.forEach((item) => {
  //     fs.readFile("blogdata/" + item, (data) => {
  //       allBlogs.push(data);
  //     });
  //   });
  //   res.status(200).json(allBlogs);
  // });

  let data = await fs.promises.readdir("blogdata")
  data = data.slice(0, parseInt(req.query.counts)); //for Pagination or Infinite scroll
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(("blogdata/" + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs);
}
