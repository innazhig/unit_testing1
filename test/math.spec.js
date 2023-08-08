const {sum, allUpper} = require('../index');
const expect = require('chai').expect

// // using noda assertion library
// const assert = require('assert');//noda's assert

// it('Calc sum with positive numbers', () => {
//     assert.equal(sum(5,7),12)
// })
//
// it('Calc sum with negative numbers', () => {
//     assert.equal(sum(-5,-7),-12)
// })

//**************************************************************************************
//**        chai                                                    *                 **
//**        npm install chai --save-dev                             *                 **
//**************************************************************************************
describe('SUM', () => {
    it('Calc sum with positive numbers', () => {
        expect(sum(5, 7)).equal(12)
    });

    it('Calc sum with negative numbers', () => {
        expect(sum(-5, -7)).equal(-12)
    });

    it ('Calc sum with positive and negative numbers', () => {
        expect(sum(5, -7)).equal(-2)
    });
});

describe('ALL UPPER', () => {
    it('all lower case', () => {
        expect(allUpper(['a','ab'])).eql(['A','AB'])
    });

    it('all upper case', () => {
        expect(allUpper(['A','ER'])).eql(['A','ER'])
    });

    it ('mixed case', () => {
        expect(allUpper(['a','Er'])).eql(['A','ER'])
    });
});