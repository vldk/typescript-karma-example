interface IPerson {
    firstName:string;
    lastName:string;
    age?:number;
}

export class Person implements IPerson {

    firstName:string;
    lastName:string;
    age:number;

    constructor(firstName:string, lastName:string, age:number = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    setAge(age:number){
        if(age < 0) throw new Error('Invalid age value');
        this.age = age;
    }
}



