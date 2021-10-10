// TODO: Create an array with five question objects
var questions = [{q:'Is the sky blue?', a: 'yes'}, {q:'Is the sun hot', a: 'yes'}, {q:'Are we always happy?', a: 'no'}, {q: 'Can people breath underwater?', a: 'no'}, {q: 'Can we always win?', a: 'no'}]
var answer = []
correctAnswer = []
// TODO: Create a variable to keep track of the score
var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
var iterateQuestions = function(){
    questions.forEach(function(question) {
        for(var i in question) {
            if (i === 'q') {
                  answer.push(confirm(question[i]))
            } if(i === 'a') {
                correctAnswer.push(question[i])
                console.log(correctAnswer)
            }
    }

    })
    console.log(answer)


}
iterateQuestions()

// TODO: Check the user's answer against the correct answer
var checkCorrectAnswer = function(){
    for ( i = 0; i < answer.length; i++) {
        for (j = 0; i < correctAnswer.lenght; j++) {
            if ( i === j) {
                score++
            }
            console.log(score)
        }
    }
}



// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score
