// Avoid using setState inside useEfffect. useState re-render the components again.

// same funstionality on useEffect on multiple files, then create a custom Hook.

// abc != null && abc != undefined {}
// abc && {}

// Colors , themes and huge number of constants. For large object literals.
// Color type will be fixed.
const Colors = {
  blue: "blue",
  green: "green",
  red: "red",
} as const;
