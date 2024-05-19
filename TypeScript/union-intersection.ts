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
type allTypeUser =  UserDet | AccountDetails | (UserDet & AccountDetails)

const User1 : UserDet | AccountDetails = {name: '', add: '', accNo: ''}

