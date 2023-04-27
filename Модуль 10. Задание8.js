let arr = new Map([
    ['Julia', 21],
    ['Alexandr', 27],
    ['Yura', 34]
  ]);  
  
  // for (let key of arr.keys()) {
  //   console.log(key);
  // }
  
  // for (let value of arr.values()) {
  //   console.log(value);
  // }
  
  for (let pair of arr.entries()) {
    console.log(`Ключ = ${pair[0]}, значение = ${pair[1]}`);
  }