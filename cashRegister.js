// Conclusión
(function() {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  tipo  El tipo de ajuste.
     * @param {Number}  valor El numero.
     * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
     * @returns {Number} El valor ajustado.
     */
    function decimalAdjust(type, value, exp) {
      // Si el exp no está definido o es cero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Si el valor no es un número o el exp no es un entero...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
  
    // Decimal round
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    // Decimal floor
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
    // Decimal ceil
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
  })();
  
  
  
  
  var bills = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  
  function checkCashRegister(price, cash, cid) {
    var object = {};
    var sumAllBills = 0;
      var sumBillsExtracted = 0;
      var arrayBill = [];
      var arrayBills = [];
      var change = cash - price;
      var changeGlobal = change;
      console.log(change);
      var sumFunds = 0;
      var numEspecificBill = 0;
      
      var begin = cid.length-1
      for(let i=begin; i>-1; i--){  
        console.log(i)
        console.log(cid[i][1])
  
        if(cid[i][1]>0){
          console.log(cid[i][1])
          numEspecificBill = cid[i][1]/bills[i];
          console.log(cid[i][1] +" / "+bills[i] +": "+cid[i][1]/bills[i])
          console.log(bills[i])
          console.log(numEspecificBill+" en la posicion : "+i);
          
          console.log(i);
          for(let y=0; y<numEspecificBill; y++){
            console.log(y+" "+bills[i])
            if((change-bills[i])>=0){
              sumFunds =sumFunds + bills[i];
              console.log(sumFunds);
              let stringNum =sumFunds.toString();
              let stringChange = change.toString();
  
              if(sumFunds<1 && sumFunds>0 && stringNum.length>4){
                if(stringNum[5]==0){
                  let modify = sumFunds.toFixed(2);
                  console.log(modify);
                  
                  sumFunds = parseFloat(modify);
                  console.log(sumFunds)
                }else if(stringNum[5]==9){
                  let modify = Math.round10(sumFunds.toFixed(2), -2);
                  console.log(modify);
                  
                  sumFunds = parseFloat(modify);
                  console.log(sumFunds)
                }
              }
        
              console.log("iteracion:" +y+" "+sumFunds+" + "+bills[i]);
              change -= bills[i];
              if(change<1 && change>0 && stringChange.length>4){
                if(stringChange[5]==0){
                  let modify = change.toFixed(2);
                  console.log(modify);
                  
                  change = parseFloat(modify);
                  console.log(change)
                }else if(stringChange[5]==9){
                  let modify = Math.round10(change.toFixed(2), -2);
                  console.log(modify);
                  
                  change = parseFloat(modify);
                  console.log(change)
                }
              }
              console.log(change);
            }
          }
          if(sumFunds>0){
            arrayBill.push(cid[i][0]);
            arrayBill.push(sumFunds);
            arrayBills.push(arrayBill);
            arrayBill =[];
            sumFunds =0;
          }
        }
        
      }
      console.log(arrayBills);
      console.log(numEspecificBill);
      //total de billetes en la caja
      for(let y =0; y<cid.length; y++){
        sumAllBills += cid[y][1];
      }
      //total de billetes extraidos de la caja 
      for(let j=0; j<arrayBills.length; j++){
        sumBillsExtracted += Math.round(arrayBills[j][1].toFixed(2)*100)/100;
      }
      console.log(sumBillsExtracted);
      console.log(sumAllBills);
      console.log(changeGlobal);
      console.log(arrayBills);
      //comprobaciones y respuestas
      if(sumBillsExtracted == sumAllBills && changeGlobal==sumBillsExtracted){
        object.status = "CLOSED";
        object.change = [];
        var array = arrayBills;
        console.log("heloo "+arrayBills);
        for(let g=0 ; g<cid.length; g++){
          object.change.push(cid[g]);
        }
        console.log(object);
       
        
        return object ; 
      }else if(sumAllBills>sumBillsExtracted && change<sumBillsExtracted){
        
        object.status = "OPEN";
        object.change = [];
        var array = arrayBills;
        console.log("heloo "+arrayBills);
        for(let g=0 ; g<arrayBills.length; g++){
          object.change.push(arrayBills[g])
        }
        console.log(object);
       
        
        return object ;
      }else{
       return {status: "INSUFFICIENT_FUNDS", change: []};
      }
    
  }
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);