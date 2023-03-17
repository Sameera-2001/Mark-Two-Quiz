var readlineSync=require('readline-sync');
var userName=readlineSync.question("Enter your name: ");
var score=0;
var highestScore=5;
console.log("Hi "+userName+" welcome to quiz. We wish you luck");
//console.log();
function play(question,answer)
{
  console.log()
  var userAns=readlineSync.question(question);
  if(userAns===answer)
  {
    score=score+1;
    console.log("Your are right");
  }
  else
    console.log("Oops You are wrong");
  console.log("Your score is "+score);
  console.log("------------------------------------------------------------------")
}
//array of objects
var arr=[
  Q1={
    question:
      "Which song Pheebs sings frequently         a)Smelly Cat   b)Happy Cat     c)SleepyCat ",
    answer: "a"
  },
  Q2={
    question: "Joeys bestfriend is?                        a)Ross   b)Chandler        c)Rachael ",
    answer: "b"
  },
  Q3={
    question: "Where ross works?                        a)Museum     b)Saloon        c)Coffee Shop ",
    answer:"a"
  },
  Q4={
    question: "What is Joey profession?                 a)Anchor   b)Accoutant       c)Actor ",
    answer: "c" 
  }
]
for(var i=0;i<arr.length;i++)
  {
    play(arr[i].question,arr[i].answer);
  }

console.log("Your final score is "+score);
if(score>=highestScore)
{
  console.log("Cogratulations you have beaten highscore!");
  highestScoreName=userName;
}
