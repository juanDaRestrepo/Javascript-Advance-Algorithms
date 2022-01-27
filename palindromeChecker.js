function palindrome(str) {
    var arrayNewStr = [];
    var result;
    var startStr="";
    var finalStr="";
    var startFinish= 0;
    for(let i=0; i<str.length; i++){
      let caracterRegex = /[a-z0-9]/i;
      result = caracterRegex.test(str[i]);
      if(result){
        arrayNewStr.push(str[i].toLowerCase());
      }
    }
    //if para extraer cadena del principio y el final de una cadena de tamaño par
    if(arrayNewStr.length%2==0){
      startFinish = arrayNewStr.length/2;
      for(let y=0; y<startFinish; y++){
        startStr = startStr+(arrayNewStr[y]);
      }
      for(let j=arrayNewStr.length-1; j>=startFinish; j--){
        finalStr += arrayNewStr[j];
        
      }
      console.log(startStr);
      console.log(finalStr);
      if(startStr == finalStr){
        return true;
      }else{
        return false;
      }
    }else{
      startFinish = Math.floor(arrayNewStr.length/2);
       for(let y=0; y<startFinish; y++){
        startStr = startStr+(arrayNewStr[y]);
      }
      for(let j=arrayNewStr.length-1; j>startFinish; j--){
        finalStr += arrayNewStr[j]; 
      }
      console.log(startStr);
      console.log(finalStr);
       if(startStr == finalStr){
         console.log("entre");
        return true;
      }else{
        console.log("")
        return false;
      }
    }
    
  
   
  }
  
  
  
  palindrome("eye");