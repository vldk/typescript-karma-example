/// <reference path="./../../typings/index.d.ts" />
import {Person} from "../../src/scripts/Person";
import {expect} from 'chai';

describe('Person', () => {
    let first = 'John';
    let last = 'Doe';
    let person = new Person(first, last);

    it('should have first and last name at creation', () => {

        expect(person.firstName).to.be.eq(first);
        expect(person.lastName).to.be.eq(last);
    });
});
