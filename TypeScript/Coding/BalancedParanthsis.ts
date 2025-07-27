// input = 'aaabccddbnaa'
// output = a2b1c2d2b1n1a2

let str = "aaabccddbnaa";
let strVal = str.split("");

let count = 0;
let result = "";
let dictResult = [];

for (let i = 1; i <= strVal.length; i++) {
  if (strVal[i - 1] === strVal[i]) {
    count += 1;
  } else {
    result += strVal[i - 1] + count;

    let temp = {};
    temp[strVal[i - 1]] = count;
    dictResult.push(temp);

    count = 1;
  }
}

console.log(result);
console.log(dictResult);
