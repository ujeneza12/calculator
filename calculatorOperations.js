const readline = require('readline');
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 var num ;
 var num2 ;
 rl.question(' enter first number ', function (num) {

    rl.question('enter operator ', function (operator) {

      function number(num, oper, num2){

        if(oper == '+'){
          return num+num2
        }
        else if(oper == '-'){
          return num-num2
        }
        else if(oper == '*'){
          return num*num2
        }

        else if(oper == '/'){
          return num/num2
        }

        else if(oper == '%'){
          return num%num2
        }
        else{
          console.log('No Operation given');
        }


      }

      rl.question('Enter the second number: ', function(num2){
  console.log(`${num} ${operator} ${num2} = ${number(Number(num),operator,Number(num2))}`)
      })

      

    })
    
  })

     
