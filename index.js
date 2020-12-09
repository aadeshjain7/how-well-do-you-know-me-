var readlineSync=require('readline-sync');

var userName=readlineSync.question("What is your Name? ");
console.log("Welcome "+userName,"Do you Know Aadesh?");
var score=0
function play(question,answer){
var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("You are right!");
    score=score+2
  }else{
    console.log("You are wrong!");
    score=score-1

  }
console.log("Your score is ",score);
console.log("---------------------")
}



var questions=[{
question:"Where do Aadesh currently study?",
answer:"Pune"
},{
  question:"What sport Aadesh like the most ?",answer:"Basketball"
},{
  question:"Which superhero Aadesh like the most? ",
  answer:"Hulk"

}];
for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your final score is "+score);
console.log("---------------------------");
console.log("Check out the highscores:")
var highscores=[{
  name:"Moksh",
  score:3
},{
  name:"Yash",
  score:3
}];
for(i=0;i<highscores.length;i++){
  var scores=highscores[i];
  console.log(scores.name,scores.score)
}
console.log("---------------------------");
console.log("If you have scored >=3 than you know me pretty well and send me screenshot 0f your score,i will update the data")

