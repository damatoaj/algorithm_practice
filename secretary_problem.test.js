const secretary_problem = require('./secretary_problem');

test('Optimal stopping problem: ', ()=> {
    expect(secretary_problem.optimalStopping([2,5,8,3,6,1,9,7,4,10])).toBe(9)
    expect(secretary_problem.optimalStopping([10,5,8,3,6,1,9,7,4,2])).toBe(10)

    expect(secretary_problem.reverseOptimalStopping([2,5,8,3,6,1,9,7,4,10])).toBe(10)
    expect(secretary_problem.reverseOptimalStopping([10,5,8,3,6,9,1,7,4,2])).toBe(9)
});