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
  return stack.length === 0;
}

// [[{}]] => true
// []{}() => true
// [{({)}}] => false
let input1 = "{{[()]}}";
console.log(balanced(input1));

// ----------------------------------------------------------------------------

// Product of Remaining Elements of Array

function productExceptSelf(arr) {
  return arr.map((_, i) => {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) product *= arr[j];
    }
    return product;
  });
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

function productExceptSelf1(arr) {
  let n = arr.length;
  let result = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= arr[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]

// ----------------------------------------------------------------------------
// SecondLargestNumber
let tempArr = [54, 66, 48, 65, 776, 36, 456, 39, 45, 33];
let largest = -1;
let secondLargest = -1;

for (let num of tempArr) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest) {
    secondLargest = num;
  }
}

console.log(largest);
console.log(secondLargest);

// ----------------------------------------------------------------------------

// Palindrome
function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // check with AlphaNumeric regex
    if (str[left] === " ") {
      left++;
    }
    if (str[right] === " ") {
      right--;
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

let tempStr = "R Ama R";
console.log(checkPalindrome(tempStr));

// AlphaNumeric
// function alphaNumeric(char: any) {
//   return /[a-z0-9]/i.test(char);
// }
