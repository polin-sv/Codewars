function findSmallestInt(arr) {
  let length = arr.length;
  let min = arr[0];
  for(let i = 0; i < length; i++){
    if(min > arr[i]){
      min = arr[i];
    }
  }
  return min;
}
