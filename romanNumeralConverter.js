var romanNumbers = ["M", 1000, "D", 500, "C", 100, "L", 50, "X", 10, "V", 5, "I", 1];

function convertToRoman(num) {
  var auxNum = num.toString().split("");
  var roman = "";
  var numStr = [];
  var numS = "";
  for (var i = 1; i < romanNumbers.length; i += 2) {
    console.log(romanNumbers[i]);
    console.log(roman);
    while (num > 0) {
      if (num - romanNumbers[i] >= 0) {
        console.log("entre a este if");
        roman += romanNumbers[i - 1];
        num -= romanNumbers[i];
        console.log(num);
      } else {
        numStr = num.toString().split("");
        console.log(numStr);
        let chain = romanNumbers[i].toString().split("");
        console.log(chain);
        if (numStr[0] == 4 && numStr.length == chain.length) {
          console.log(chain);
          console.log(numStr[0]);
          console.log("entre a este if");

          roman += romanNumbers[i + 1];
          roman += romanNumbers[i - 1];

          for (let c = 1; c < numStr.length; c++) {
            numS += numStr[c];
          }
          console.log(numS);
          num = parseInt(numS);
          numS = "";
          console.log(num);
          console.log(roman);
          break;
        } else if (numStr[0] == 9 && numStr.length + 1 == chain.length) {
          
          
          console.log(numStr);
          console.log(chain);
          console.log("entre aqui");
          console.log(numStr.length);

          if (numStr.length == 3 && auxNum.length == 4 ) {
            i += 2;
            console.log("se");
            console.log(romanNumbers[i]);
            console.log(numStr);
            console.log(chain);
            roman += romanNumbers[i + 1];
            roman += romanNumbers[i - 3];
            console.log(roman);
          } else if (numStr.length == 2 && auxNum.length == 4) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            console.log(numStr);
            console.log(chain);
            roman += romanNumbers[i + 1];
            console.log(romanNumbers[i + 3]);
            roman += romanNumbers[i - 3];
            console.log(romanNumbers[i - 1]);
            console.log(roman);
            
          } else if (numStr.length == 1 && auxNum.length == 4) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 1];
            roman += romanNumbers[i - 3];
            console.log(roman);
          }else if (numStr.length == 3 && auxNum.length == 3) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 1];
            roman += romanNumbers[i - 3];
            console.log(roman);
          }else if (numStr.length == 2 && auxNum.length == 3) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 1];
            roman += romanNumbers[i - 3];
            console.log(roman);
          }else if (numStr.length == 1 && auxNum.length == 3) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 1];
            roman += romanNumbers[i - 3];
            console.log(roman);
          }else if (numStr.length == 2 && auxNum.length == 2) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 3];
            roman += romanNumbers[i - 1];
            console.log(roman);
          }else if (numStr.length == 1 && auxNum.length == 2 && auxNum[0] == 9) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 3];
            roman += romanNumbers[i - 1];
            console.log(roman);
          }else if (numStr.length == 1 && auxNum.length == 2 && auxNum[0] != 9) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 1];
            roman += romanNumbers[i - 3];
            console.log(roman);
          }
          else if (numStr.length == 1 && auxNum.length == 1) {
            i+=2;
            console.log("se");
            console.log(romanNumbers[i]);
            roman += romanNumbers[i + 3];
            roman += romanNumbers[i - 1];
            console.log(roman);
          }
          console.log(roman);

          for (let c = 1; c < numStr.length; c++) {
            numS += numStr[c];
            console.log(numStr[c]);
          }
          num = parseInt(numS);
          console.log(num);
          numS = "";
          console.log(roman);
          break;
        } else {
          break;
        }
      }
    }
  }
  return roman;
}


convertToRoman(36);