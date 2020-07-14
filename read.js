var readline = require('readline');
var rl =  readline.createInterface({input:process.stdin,output:process.stdout});

var num1 = Math.floor(Math.random()*10);
var num2 = Math.floor(Math.random() * 10);

var answer = num1 + num2;

rl.question("what is the value of "+ num1.toString() +" +"+ num2.toString()+"\n",function(userInput){
    //console.log(userInput)
    if(userInput.trim() == answer){
        console.log("correct answer");
        rl.close()

    }else{
        console.log(" try again ")
        rl.close();
    }
})

//console.log(Math.floor(Math.random()*10))