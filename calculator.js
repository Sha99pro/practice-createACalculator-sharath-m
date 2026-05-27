// Calculator program


function absolute(num){
     return Math.abs(num);
}

function power(x , y){
   return Math.pow(x , y);
}

function squareRoot(num1){
   return Math.sqrt(num1);
}

 function findMax(arr){
   return Math.max(...arr);
 }
 
 
  function findMin(arr1){
   return Math.min(...arr1);
  }
  
 
  function randomNum( min , max){
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max -min +1)) + min ;
  }
 

 function round(num2 , places){
  let factor = Math.pow(10, places); 
  return Math.round(num2 * factor) / factor;
}

console.log("Absolute:", absolute(-45.67));     // absolute value
console.log("Power:", power(5, 3));               //  power calculation
console.log("Square Root:", squareRoot(144));        // square root

let arr = [3, 78, -12, 0.5, 27];

console.log("Max:", findMax(arr));
console.log("Min:", findMin(arr));

console.log("Random:", randomNum(1, 50));            // random number between  1 and 50
console.log("Rounded:", round(23.67891, 2));            //custom rounding

