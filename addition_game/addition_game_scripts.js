 function runTest(input){
     if(isNaN(input)){
         document.getElementById("messageDisplay").style = "color:red";
         document.getElementById("messageDisplay").innerHTML = "Error! Not a valid answer!";
     }
     else if(Number(input) == window.testObject.answer){
         document.getElementById("messageDisplay").style = "color:green";
         document.getElementById("messageDisplay").innerHTML = "Correct!";
     }
     else{
         document.getElementById("messageDisplay").style = "color:red";
         document.getElementById("messageDisplay").innerHTML = "Incorrect!";
     }
 }

 function generateNewTest(){
     window.testObject = {num1:0, num2:0, answer:0};
     window.testObject.num1 = Math.round(Math.random() * 10);
     window.testObject.num2 = Math.round(Math.random() * 10);
     window.testObject.answer = window.testObject.num1 + window.testObject.num2;
     document.getElementById("problemDisplay").innerHTML = window.testObject.num1 + ' + ' + window.testObject.num2 + ' = ';
     document.getElementById("messageDisplay").innerHTML = "";
     document.getElementById("answerInput").value="";
 }