const { readFileSync, writeFileSync } = require("fs");
console.log("start");
//const fs = require("fs");
//fs.read(readFileSync);

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first);
console.log(second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result ${first}, ${second}`,
  { flag: "a" } // create new value, it dosen't overide
);
console.log("Finished 10");
console.log("Starting next:");
// write a new file or overide if existing
