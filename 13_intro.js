// npm --version
/* local dependency -> use only on this project
npm i <packageName>



global dependency
npm install -g <packageName>

package.json - manifest file
manual -> create a .json in the root, create proprieties, etc
npm innit (step by step)
npm innit -y
*/
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
