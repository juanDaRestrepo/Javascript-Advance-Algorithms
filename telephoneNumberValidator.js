function telephoneCheck(str) {
    var regexOne = /[100-999]+\-[100-999]+\-[1000-9999]+/;
      var regexTwo = /\([100-999]+\)[100-999]+\-[1000-9999]+/;
      var regexThree = /\([100-999]+\) [100-999]+\-[1000-9999]+/;
      var regexFour =  /[100-999]+ [100-999]+ [1000-9999]+/;
      var regexFive = /[1000000000-9999999999]+/g;//Ojo caso especial
      var regexSix = /1 [100-999]+ [100-999]+ [1000-9999]+/;
      var regexSeven = /a/;
   
     var resultOne=regexOne.test(str);
     var resultOneMatch = str.match(regexOne);
     console.log(resultOneMatch);
   
     var resultTwo=regexTwo.test(str);
     var resultTwoMatch = str.match(regexTwo);
     console.log(resultTwoMatch);
   
     var resultThree=regexThree.test(str);
     console.log(resultThree);
     var resultThreeMatch = str.match(regexThree);
     console.log(resultThreeMatch);
   
     var resultFour=regexFour.test(str);
     var resultFourMatch = str.match(regexFour);
     console.log(resultFourMatch);
   
     var resultFive=regexFive.test(str);
     var resultFiveMatch = str.match(regexFive);
     console.log(resultFiveMatch);
   
     var resultSix=regexSix.test(str);
     var resultSixMatch = str.match(regexSix);
     console.log(resultSixMatch);
  
     var resultSeven=regexSeven.test(str);
     var resultSevenMatch = str.match(regexSeven);
     console.log(resultSevenMatch);
  
     
       if(resultSix){
         return true;
       }else if(resultFive && resultFiveMatch[0].length==10 && str.length==10){
         return true;
       }else if(resultFive && str[0]=="(" && str[4]==")" && resultFiveMatch.length==3){
        return true;
      }
       else if(resultThree && resultFiveMatch.length>3 && resultFiveMatch[0]==1 && str[0] != "-"){
          return true;
       }
       else if(resultFour && resultFiveMatch.length>3 && str[0]==1){
        return true;
       }else if(resultTwo && resultFiveMatch.length>3 && str[0]==1){
        return true;
       }else if(resultOne && parseInt(str[0]) && resultFiveMatch.length<5 ){
        return true;
       }
       else{
         return false;
       }
   
   
  }
  
  telephoneCheck("2 (757) 622-7382");