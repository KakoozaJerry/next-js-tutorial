import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const files = fs.readdirSync(path.resolve("data"));
  console.log(files);
  const tip = files[Math.floor(Math.random() * files.length)]
  const tipData = fs.readFileSync(path.resolve(`data/${tip}`), "utf8");

  res.status(200).json(JSON.parse(tipData))
}
