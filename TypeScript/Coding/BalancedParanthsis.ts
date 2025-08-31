// input = "{{[()]}}()";
// output = balanced

function checkBalanced(input) {
  let inputVal = input.split("");

  let stack = [];

  for (let i = 0; i < inputVal.length; i++) {
    if (inputVal.length === 0) {
      return false;
    }

    switch (inputVal[i]) {
      case "[":
        stack.push(inputVal[i]);
        break;
      case "{":
        stack.push(inputVal[i]);
        break;
      case "(":
        stack.push(inputVal[i]);
        break;
      case "]":
        if (stack.pop() === "[") {
          break;
        } else {
          return false;
        }

      case "}":
        if (stack.pop() === "{") {
          break;
        } else {
          return false;
        }

      case ")":
        if (stack.pop() === "(") {
          break;
        } else {
          return false;
        }
    }
  }

  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }

  console.log("result ===>", stack.length);
}

let input = "{}{}}";

console.log(checkBalanced(input));

// input = 'aaabccddbnaa'
// output = a2b1c2d2b1n1a2

// inputs =

// [[{}]] => true
// []{}() => true
// [{({)}}] => false
