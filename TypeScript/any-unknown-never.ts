//any vs unknown vs never

//any is being used for any type and use to opt out of type checking.
// using any use avoided whenever its possible.

//unknown
// this is similiar to any but safer because you can't perform operations 
// on an unknown value without first checking its type

function addValues(a: unknown,b: unknown) {
    if (typeof a === 'number' && typeof b === 'number')
    return a+b;
}

// never
// type that represents values that will never occur.
// used mostly while handling exception
function throwError(message: string): never {
    throw new Error(message)
}


// any vs unknown => any will allow u to do anything but unknown what allow u to do
// anything without type checking
let a: any;
let b: unknown;
a.whatever();  // we can perform anything
b.whatever();  // it won't allow without type checking