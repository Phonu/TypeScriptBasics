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
}
  
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


