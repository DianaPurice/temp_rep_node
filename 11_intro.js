const { readFile, writeFile } = require("fs");

console.log("starting");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result_async.txt",
      `here is the result for 11:\n ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this");
      }
    );
  });
});
console.log("Starting next task:");
