// #### let,var and const

// there are used to create variable.
// var is function-scoped varibale which can be used within the function and can be declared
// outside of the function and used globally.
// let is block-scoped variable which can used within the block where it declared.
// const are block-scoped immutable variable and cannot be reassigned.
// we can update non-primitive(object) type of data in const like
const temp = { first: "kunal", last: "poddar" };
temp.first = "mona";

// shollow copy
// obj2 = object.assign()
// obj2 = obj1
// spread operator => obj2 = {...obj1}

// Deep Copy = when we make changes on object, it won't impact on other one.
// let obj2 = JSON.stringify(obj1);

// Map => if we want to manipulate or update each data of an array we can iterate the
// the array with Map and new array will create with updated changes.

// filter => it will iterate each data and filter out the conditional data and update on
// the new array.

// PROTOTYPE
// Every object in Javascript has a build-in property which is called its prototype.
// when we create any variable on javascript, it attached an property
// with the help of prototype chainaing we are able use like array.push.pop.

// Arrow Function
// syntectical differnce, we dont have this
// we dont have argument
// not going to hoist

//bind, call and apply
//
