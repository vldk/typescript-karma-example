
export module Example {

    interface IPerson {
        firstName:string;
        lastName:string;
        age?:number;
    }

    export class Person implements IPerson {

        firstName:string;
        lastName:string;


    }

}

