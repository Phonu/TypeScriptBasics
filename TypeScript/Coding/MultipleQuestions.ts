function characterCount(input) {
  let strVal = input.split("");
  let count = 0;
  let result = "";

  for (let i = 1; i <= strVal.length; i++) {
    if (strVal[i - 1] === strVal[i]) {
      count += 1;
    } else {
      result += strVal[i - 1] + count;
      count = 1;
    }
  }
  return result;
}

let str = "aaabccddbnaa";
console.log(characterCount(str)); // a2b1c2d2b1n1a2

// ----------------------------------------------------------------------------

const frequenctCal = (arr) => {
  const freq = {};
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq;
};
const arr = [3, 5, 3, 5, 3, 5, 3, 7, 5, 7];
console.log(frequenctCal(arr)); // [ {3: 4, 5:4, 7: 2}]

// ----------------------------------------------------------------------------

function currying(a) {
  return function currying(b) {
    return function currying(c) {
      return a + b + c;
    };
  };
}
console.log(currying(2)(3)(5)); //10

// ----------------------------------------------------------------------------

function infiniteCurrying(a) {
  return function (b) {
    if (b !== undefined) {
      return infiniteCurrying(a + b);
    } else {
      return a;
    }
  };
}
console.log(infiniteCurrying(2)(3)(5)()); //10

// ----------------------------------------------------------------------------

function balanced(arg) {
  let stack = [];
  let inputVal = arg.split("");
  let charMap = { "]": "[", "}": "{", ")": "(" };
  for (i of inputVal) {
    if (["[", "{", "("].includes(i)) {
      stack.push(i);
    } else {
      if (stack.pop() !== charMap[i]) {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
}

// [[{}]] => true
// []{}() => true
// [{({)}}] => false
let input1 = "{{[()]}}";
console.log(balanced(input1));

// ----------------------------------------------------------------------------
