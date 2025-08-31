//Typescript vs Javascript

/**

- Javascript is a programing language.
- Typescript is a programing language build on top of js with adddition feature.

- javascipt is weakly typed language.
- typescipt is strongly typed language with ask us to define data type.

- javascript code excutes during runtime.
- typescript code executes during complie time.

- most of browser supports javascipt.
- needs a transpiler (like Bebel) to convert to JS.

- javascipt - easy to write but hard to maintain
- typescript - hard to wrie but easy to maintain.

- Babel is a transpiler used to convert ts/js code to make compitable with older browesers.
- Webpack is used to bundle and optimize the code.
- This combinationn allows developers to write code using latest features and ensure its efficiently 
   packaged for deployment.

 * 
 */

// ------------------------------------------------------------------------

// ANY vs UNKNOWN vs NEVER

//any is being used for any type and use to opt out of type checking.
// using any use avoided whenever its possible.

//unknown
// this is similiar to any but safer because you can't perform operations
// on an unknown value without first checking its type

function addValues(a: unknown, b: unknown) {
  if (typeof a === "number" && typeof b === "number") return a + b;
}

// never
// type that represents values that will never occur.
// used mostly while handling exception
function throwError(message: string): never {
  throw new Error(message);
}

// any vs unknown => any will allow u to do anything but unknown what allow u to do
// anything without type checking
let a: any;
let b: unknown;
a.whatever(); // we can perform anything
b.whatever(); // it won't allow without type checking

// ------------------------------------------------------------------------

// Reopening of interfaces
interface UserDetails {
  name: string;
  adress: string;
}
interface UserDetails {
  mobile: string;
}

interface Admin extends UserDetails {
  role: "CEO" | "CTO";
}

//  const abc: Admin = {name: '', adress: '', mobile: '', role: ''}

// interface Admin extends User, AnotherUser {
// 	uniqueID: string
// 	role: ‘df’ | ‘rer'
// }

// we can reopen, inject the value, make inheritance

// type and interface
// type => we have assignment operator
// type abc = User
// interface abc {}

//Type aliasing
type rgb = [number, number, number];
function createRGB(): rgb {
  return [2, 3, 5];
}

type obj = { a: string; b: number };
function outObj(): obj {
  return { a: "", b: 4 };
}

//interfac vs Type
//not a huge difference in type vs interface
// 90% are common like

//both we can create the entities
interface UserInterface {
  name: string;
  id: string;
}

type UserType = {
  name: string;
  id: string;
};

//Both we can extends the entitles
interface NewUserInterface extends UserInterface {
  add: string;
}

type NewUserType = UserType & {
  add: string;
};

//Class based implementation
class UserInterfaceClass implements UserInterface {
  name = "";
  id = "";
}

class UserTypeClass implements UserInterface {
  name = "";
  id = "";
}

//u can't override the properties in interface
type overrideUserType = UserType & {
  id: string[];
};

// interface overrideUserInterface extends UserInterface  {
//     id: string [];
// }

// const abc: overrideUserType = {
//     id : [],
//     name : ''
// }

// ------------------------------------------------------------------------

// Union vs Intersection

//similiar to Vein Diagram/ set theory prospective

interface UserDet {
  name: string;
  add: string;
}

interface AccountDetails {
  accNo: string;
  branch: string;
}

//want all types
type allTypeUser = UserDet | AccountDetails | (UserDet & AccountDetails);

const User1: UserDet | AccountDetails = { name: "", add: "", accNo: "" };

// ------------------------------------------------------------------------

// Utility Types
// UtilityType<Type, keys>

//Partial
//Required
//Omit
//Pick
//Record

type User = {
  empName: string;
  empID: number;
  location: string;
  role: string;
};

// Required: All the properties are mandatory
// type NewUser = Required<User>
// const abc: NewUser = {empName: '',empID: 34, location: '', role: ''};

// Partial: All the properties are optional
// type NewUser = Partial<User>
// const abc: NewUser = {empName: '',empID: 34}

// Omit: remove specific properties from the interface/type
// type NewUser = Omit<User, 'role'>
// const abc: NewUser = {empName: '',empID: 34, location: ''}

// Pick: make the specific properties as mandatory
// type NewUser = Pick<User, 'empName' | 'location'>
// const abc: NewUser = {empName: '' ,location: ''};

//Record : Record<keys,Type>
// type empName = 'Kunal' | 'Mona' | 'Manisha';
// interface empDetails {
//   role: string;
//   location: string;
// }

// const employees : Record<empName, empDetails> = {
//   Kunal: {role: '', location: ''},
//   Manisha: {role: '', location: ''},
//   Mona: {role: '', location: ''}
// }

// ------------------------------------------------------------------------
