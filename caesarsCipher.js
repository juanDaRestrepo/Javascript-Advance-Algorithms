var firstAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
var secondAlphabet =["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
function rot13(str) {
  var translation = "";
  var arrayString = str.split("");
  for (var i = 0; i < arrayString.length; i++) {
    var myRegex = /[A-Z]/i;
    let result = myRegex.test(arrayString[i]);
    
    
      for (var y = 0; y < firstAlphabet.length; y++) {
        if (result != true || arrayString[i] == " ") {
            
            translation += arrayString[i];
            console.log(translation);
            break;
          } 
        else if (arrayString[i] == firstAlphabet[y]) {
          
          translation += secondAlphabet[y];
          console.log(translation);
          break;
        } else if (arrayString[i] == secondAlphabet[y]) {
            
           translation += firstAlphabet[y];
           console.log(translation+" en la iteracion "+ y);
          break;
        } 
      
    }
  }
  return translation;
}

rot13("SERR PBQR PNZC");