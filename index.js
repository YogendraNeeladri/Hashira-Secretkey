const fs = require("fs");
const path = require("path");


function parseValue(str, base) {
  return BigInt(parseInt(str, base));
}


function extractPoints(data, k) {
  const points = [];
  const keys = Object.keys(data).filter(key => key !== "keys").sort((a, b) => parseInt(a) - parseInt(b));

  for (let key of keys) {
    const x = BigInt(key);
    const base = parseInt(data[key].base);
    const y = parseValue(data[key].value, base);
    points.push([x, y]);
    if (points.length === k) break;
  }

  return points;
}

function lagrangeInterpolation(points) {
  let result = 0n;

  for (let i = 0; i < points.length; i++) {
    let [xi, yi] = points[i];
    let num = 1n;
    let den = 1n;

    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        let [xj] = points[j];
        num *= -xj;
        den *= (xi - xj);
      }
    }

    const term = (yi * num) / den;
    result += term;
  }

  return result;
}

function solveFromFile(filename) {
  const filePath = path.join(__dirname, "input", filename);
  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const k = data.keys.k;
  const points = extractPoints(data, k);
  return lagrangeInterpolation(points);
}

const secret1 = solveFromFile("test1.json");
const secret2 = solveFromFile("test2.json");

console.log("Secretkey for testcase1:", secret1.toString());
console.log("Secretkey for testcase2:", secret2.toString());
