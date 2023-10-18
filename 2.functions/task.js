function getArrayParams(...arr) {
let min = Infinity;
let max = -Infinity;
let sum = 0;
// max = Math.max(...arr)
// min = Math.min(...arr);

for (let i=0; i<arr.length; i++){
  if (arr[i] > max) {
  max = arr[i]} ;
  if (arr[i] < min) 
  {
    min = arr[i]}
  }
   
    for(let i = 0; i < arr.length; i++){
      sum +=arr[i];
    }
        
let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
let sum = 0;
for(let i = 0; i<arr.length; i++){
 sum+=arr[i];
}  
      return sum; 
      }

function differenceMaxMinWorker(...arr) {
let min = Infinity;
let max = -Infinity;
  for (let i=0; i<arr.length; i++){
  if (arr[i] > max) {
  max = arr[i]} ;
  if (arr[i] < min) 
  {
    min = arr[i]}
  }
//  min = Math.min(...arr);
//  max = Math.max(...arr);
let difference = max - min ;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i=0; i<arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEvenElement+=arr[i]
    } else {
      sumOddElement+=arr[i]
    }}
    let difference = sumEvenElement - sumOddElement
      return difference;
     }


function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
let countEvenElement = 0;
for (let i =0 ; i<arr.length; i++){
  if (arr[i] % 2 == 0) {
    sumEvenElement+=arr[i];
    countEvenElement+=1;
  }
}
let average = sumEvenElement / countEvenElement;
  return average;
  }

function makeWork (arrOfArr, func) {

  let maxWorkerResult = -Infinity;
  for (let i =0; i<arrOfArr.length; i++){
    //дальше не очень понятно
    let result=0;
if (arrOfArr[i] > maxWorkerResult) {result =+arrOfArr[i];
}
  }
  return maxWorkerResult
}
