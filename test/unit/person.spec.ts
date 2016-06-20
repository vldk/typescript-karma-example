/// <reference path="./../../typings/index.d.ts" />
import {Person} from "../../src/scripts/Person";

describe('Person', ()=>{
    let person;
    let first = 'John';
    let last = 'Doe';

    beforeEach(()=>{
        person = new Person(first, last);
    });


    it('should have first and last name at creation', ()=>{
        expect(person.firstName).to.be.eq(first);
        expect(person.lastName).to.be.eq(last);
    });

    describe('person age', ()=>{
        it('should have default age', ()=>{
            expect(person.age).to.be.eq(0);
        });

        it('should set valid age', ()=>{
            person.setAge(25);
            expect(person.age).to.be.eq(25);

            expect( () => {
                person.setAge(-25)
            }).to.throw('Invalid age value');

        })
    });
});
