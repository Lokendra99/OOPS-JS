(function(){
  function Question(question,options,ans){
  this.question=question,
  this.answerOptions=options,
  this.correctAnswer=ans
  }

  var ques1_data="whose laptops is this";
  var ans1_options=['loks','rajat','marut','lalli'];
  var ans1=0;

  var ques1=new Question(ques1_data,ans1_options,ans1);

  var ques2_data="what is your fav color";
  var ans2_options=['red','green','yelloW','white'];
  var ans2=3;

  var ques2=new Question(ques2_data,ans2_options,ans2);

  var ques3_data="which is your fav lang";
  var ans3_options=['JS','PHP','Python','C++'];
  var ans3=0;

  var ques3=new Question(ques2_data,ans2_options,ans2);

  var QuestionsArray=[];

  QuestionsArray.push(ques1,ques2,ques3);


  Question.prototype.randomQuestionGenrator=function(){
    console.log(this.question);
    for (var i = 0; i < this.answerOptions.length; i++) {
      console.log(i +':'+this.answerOptions[i]);
    }
  }

  function score(){
    var sc=0;
    return function(condtnCheckTrueOrFlase){
      if(condtnCheckTrueOrFlase){
          sc++;
      }
      return sc;
    }
  }

  var scoreKeep=score();

  function endless(){
    var random_val=Math.round(Math.random()*2);

    QuestionsArray[random_val].randomQuestionGenrator();


    var answerByUser=prompt("what is the answer");
    Question.prototype.displayScore=function(Score){
      console.log("Score is :"+Score);
      console.log("----------");

    }

    Question.prototype.checkAnswer=function(answerByUser,callback){
      var Score;
      if(answerByUser==this.correctAnswer){

        console.log("Your answer is correct");
        Score=callback(true);
        //console.log("Score :"+Score);

      }
      else{
        Score=callback(false);
        //console.log("Score :"+Score);
      }
      this.displayScore(Score);
    }

    QuestionsArray[random_val].checkAnswer(answerByUser,scoreKeep);
    if(answerByUser!=='exit'){
      endless();
    }

  }
  endless();


})()
