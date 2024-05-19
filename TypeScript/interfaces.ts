// Reopening of interfaces 
interface UserDetails {
	name:  string;
	adress: string;
 }
interface UserDetails {
	mobile: string;
 }

 interface Admin extends UserDetails {
    role: 'CEO' | 'CTO'
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
type rgb = [number, number, number]
function createRGB(): rgb {
    return [2,3,5]
}

type obj = {a: string, b: number}
function outObj(): obj {
    return {a: '', b: 4}
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
}

//Both we can extends the entitles
interface NewUserInterface extends UserInterface{
    add: string;
}

type NewUserType = UserType & {
    add: string;
}

//Class based implementation
class UserInterfaceClass implements UserInterface {
    name = '';
    id = '';
}

class UserTypeClass implements UserInterface {
    name = '';
    id = '';
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

