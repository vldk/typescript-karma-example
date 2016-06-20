
import {sayHello} from './../../src/scripts/greeter';

describe('Main DOM test', () => {
    let msgEl;
    let el = document.createElement('dev');

    el.id = 'message';

    document.body.appendChild(el);


    beforeEach(()=>{
        msgEl = document.getElementById('message');
    });

    it('should has message container', ()=>{
        expect(msgEl).to.not.equal(null);
    });

    it('message should has processed innerHTML', ()=>{
        sayHello();
        expect(msgEl.innerHTML).to.be.equal('Hello, John Snow!');
    });

});
