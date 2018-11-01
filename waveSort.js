function waveSort(array) {
    let flag = true;
  for(let i = 0; i < array.length; i++){
      if(i % 2 == 0){
        if(array[i] < array[i + 1]){
            flag = false;
        }
      }else{
          if(array[i] > array[i + 1]){
              flag = false;
          }
      }
     
  }
return flag;
}

//console.log(waveSort([0, 1, 2, 4, 1, 1, 1]));
console.log(waveSort([39, 20, 22, 4, 14, 4, 6]))