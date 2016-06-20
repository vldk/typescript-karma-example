import {Person} from './Person';

export function sayHello(){
    let person = new Person('John', 'Snow');

    let el = document.getElementById('message');

    el.innerHTML = `Hello, ${person.firstName} ${person.lastName}!`;
}
