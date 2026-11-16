function findAverage(array) {
  let sum = 0;
  let n = 0;
  for(let i = 0;i < array.length ; i++){
   sum = sum + array[i];
    n++
  }
  if( n === 0){
    return 0;}
  
  return sum / n;
}
