
import {Person} from './Person';

let person = new Person('John', 'Snow');

let el = document.getElementById('message');

el.innerHTML = `Hello, ${person.firstName} ${person.lastName}!`;
