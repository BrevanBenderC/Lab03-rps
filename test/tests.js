import { didUserWin } from "../calculations";

const test = QUnit.test

test('user picks rock, com picks paper', (expect)=>{

    userChoice= 'rock'
    comChoice= 'paper'
    const expected = false;



})
test('user picks paper, com picks paper', (expect)=>{

    userChoice= 'paper'
    comChoice= 'paper'

    const expected =draw



})
test('user picks scissors, com picks paper', (expect)=>{

    
    userChoice= 'scissors'
    comChoice= 'paper'


    const expected = true



})
test('user picks rock, com picks rock', (expect)=>{




    userChoice= 'rock'
    comChoice= 'rock'

    const expected =draw



})
test('user picks paper, com picks rock', (expect)=>{

    
    userChoice= 'paper'
    comChoice= 'rock'

    const expected = true



})
test('user picks scissors, com picks rock', (expect)=>{

   
    userChoice= 'scissors'
    comChoice= 'rock'

    const expected = false

})
test('user picks rock, com picks scissors', (expect)=>{


    userChoice= 'rock'
    comChoice= 'scissors'

    const expected = false



})
test('user picks paper, com picks scissors', (expect)=>{


    
    userChoice= 'paper'
    comChoice= 'scissors'

    const expected = false




})
test('user picks scissors, com picks scissors', (expect)=>{



    userChoice= 'scissors'
    comChoice= 'scissors'

    const expected = draw




})
