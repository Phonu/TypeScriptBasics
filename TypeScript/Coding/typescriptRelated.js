/* 
Implement a TypeScript utility type IsSubType<T, U> that determines whether type T is a subtype of type U. The utility should return a boolean literal (true or false) based on the following rules:
	•	true: If T is a subtype of U, meaning T is assignable to U.
	•	false: Otherwise.
Requirements
	•	Use TypeScript’s conditional types to implement the logic.
	•	Do not modify the provided test cases.
	•	The utility type should work for both primitive and complex types.

// type IsSubType...// ======== Do not modify the test cases below ========
const numberOfOne = false satisfies IsSubType<number, 1>;
const oneOfNumber = true satisfies IsSubType<1, number>;
const abcIsString = true satisfies IsSubType<'abc', string>;
const stringIsNotAbc = false satisfies IsSubType<string, 'abc'>;


Write a TypeScript utility type UnwrapPromise<T> that extracts the resolved type from a Promise. This utility should take a type T as input, which can be a Promise type, and return the type of the value the Promise resolves to.
Requirements
	•	Input Type: The utility type should accept any type T. If T is a Promise, the utility should extract the type that the Promise resolves to.
	•	Non-Promise Types: If T is not a Promise, the utility type should return T itself.
	•	Nested Promises: The utility should be able to handle cases where T is a Promise<Promise<U>> and extract the innermost resolved type.




Fix the type error in the following line
// cannot use the any type
// cannot eliminate the unknown type. The unknown type must stay in the code
// cannot use type assertion/type casting/cast/casting. Usage of as in the code


*/
