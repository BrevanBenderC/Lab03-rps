import { didUserWin } from "../calculations.js";

const test = QUnit.test

test('user picks rock, com picks paper', (expect)=>{

    const expected = false
    const actual = didUserWin('rock', 'paper')
    expect.equal(actual, expected);



})
test('user picks paper, com picks paper', (expect)=>{

    const expected = 'draw'
    const actual = didUserWin('paper', 'paper')
    expect.equal(actual, expected);


})
test('user picks scissors, com picks paper', (expect)=>{

    
    const expected = true
    const actual = didUserWin('scissors', 'paper')
    expect.equal(actual, expected);

})
test('user picks rock, com picks rock', (expect)=>{



    const expected = 'draw'
    const actual = didUserWin('rock', 'rock')
    expect.equal(actual, expected);


})
test('user picks paper, com picks rock', (expect)=>{

    const expected = true
    const actual = didUserWin('paper', 'rock')
    expect.equal(actual, expected);


})
test('user picks scissors, com picks rock', (expect)=>{

    const expected = false
    const actual = didUserWin('scissors', 'rock')
    expect.equal(actual, expected);
})
test('user picks rock, com picks scissors', (expect)=>{


    const expected = true
    const actual = didUserWin('rock', 'scissors')
    expect.equal(actual, expected);



})
test('user picks paper, com picks scissors', (expect)=>{


    
    const expected = false
    const actual = didUserWin('paper', 'scissors')
    expect.equal(actual, expected);



})
test('user picks scissors, com picks scissors', (expect)=>{



    const expected = 'draw'
    const actual = didUserWin('scissors', 'scissors')
    expect.equal(actual, expected);



})
