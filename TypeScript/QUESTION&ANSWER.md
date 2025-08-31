# JavaScript & React Native Interview Notes

---

## Q1. What is Hoisting in JavaScript?

**Answer:**
Hoisting moves declarations (variables & functions) to the top of their scope.

- **var →** hoisted & initialized with `undefined`.

```javascript
console.log(x); // undefined
var x = 5;
```

- **let/const →** hoisted but in Temporal Dead Zone (must be initialized before use).

```javascript
console.log(y); // ReferenceError
let y = 10;
```

- **Function Declarations →** fully hoisted (can be called before declaration).

```javascript
square(4); // 16
function square(n) {
  return n * n;
}
```

- **Function Expressions & Arrow Functions →** behave like variables.

```javascript
cube(3); // TypeError: cube is not a function
var cube = function (n) {
  return n * n * n;
};
```

---

## Q2. What is the difference between Shallow Copy and Deep Copy?

**Shallow Copy →** Copies only one level, nested objects still reference the same memory.

```javascript
const obj1 = {
  name: "Kunal",
  address: { city: "Delhi" },
};

const shallowCopy = { ...obj1 }; // or Object.assign({}, obj1)
shallowCopy.address.city = "Mumbai"; // ❌ affects obj1 too!
console.log(obj1.address.city); // "Mumbai"
```

**Deep Copy →** Copies everything recursively, no shared references.

```javascript
const obj1 = { name: "Kunal", address: { city: "Delhi" } };

// ❌ Loses methods & special objects like Date, Map, Set
const deepCopy = JSON.parse(JSON.stringify(obj1));
deepCopy.address.city = "Mumbai";

console.log(obj1.address.city); // ✅ "Delhi"
```

---

## Q3. What are Closures?

**Answer:**
A closure is created when a function "remembers" variables from its lexical scope, even after that scope has finished executing.

```javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

---

## Q4. What is Function Currying?

**Answer:**
Currying is transforming a function with multiple arguments into a sequence of functions, each taking a single argument.

```javascript
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6
```

---

## Q5. What is Infinite Currying?

```javascript
function add(a) {
  return function (b) {
    if (b !== undefined) return add(a + b);
    return a;
  };
}
console.log(add(1)(2)(3)(4)()); // 10
console.log(add(5)(10)()); // 15
```

Or by overriding `.toString()`:

```javascript
function add(a) {
  function inner(b) {
    if (b !== undefined) return add(a + b);
    return a;
  }
  inner.valueOf = () => a;
  inner.toString = () => a;
  return inner;
}
console.log(add(1)(2)(3)(4)); // 10
```

---

## Q6. Explain the Event Loop in JavaScript

**Answer:**
The event loop allows asynchronous execution in a single-threaded environment.

- Executes **call stack** first
- Then processes **microtasks (Promises, MutationObserver)**
- Then processes **callback queue (setTimeout, setInterval, I/O)**

```javascript
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

**Output:**

```
Start
End
Promise
setTimeout
```

---

## Q7. What is the difference between Spread and Rest Operators?

**Spread → expands elements**  
**Rest → collects elements**

```javascript
// Spread
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]

// Rest
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

---

## Q8. Explain React Lifecycle methods

**Mounting →** when inserted into DOM

- `componentDidMount` → `useEffect(() => {...}, [])`

**Updating →** when props/state change

- `componentDidUpdate` → `useEffect(() => {...}, [deps])`

**Unmounting →** when removed from DOM

- `componentWillUnmount` → cleanup in `useEffect`

---

## Q9. What is the difference between Reducer and ExtraReducer in Redux Toolkit?

- **Reducers:** handle actions only within the slice.
- **extraReducers:** allow responding to actions from outside the slice (e.g., `createAsyncThunk` or common actions like logout).

Example:

```javascript
extraReducers: (builder) => {
  builder
    .addCase(fetchUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
};
```

---

# ✅ End of Interview Prep Guide
