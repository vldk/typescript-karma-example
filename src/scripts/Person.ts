interface IPerson {
    firstName:string;
    lastName:string;
    age?:number;
}

export class Person implements IPerson {

    firstName:string;
    lastName:string;


    constructor(firstName:string, lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}



