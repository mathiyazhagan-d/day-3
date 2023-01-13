// question 1 for ,for in, for of and for each
let marketItems = {
    morning: ["bread", "milk", "egg"],
    lunch: ["bread", "milk", "egg"],
    night: ["bread", "milk", "egg", "rice"],
  };
  /* output for 
  bread
  milk
  egg
  rice
  */
  
  // for loop to print food for night
  
  for (let i = 0; i < marketItems.night.length; i++) {
    console.log(marketItems.night[i]);
  }
  
  // for in
  
  for (let key in marketItems) {
    console.log(key, marketItems[key]);
  }
  
  /* output for in
  morning [ 'bread', 'milk', 'egg' ]
  lunch [ 'bread', 'milk', 'egg' ]
  night [ 'bread', 'milk', 'egg', 'rice' ]
  
  */
  
  let foodItems = ["bread", "milk", "egg", "rice"];
  
  // for of
  
  for (let index of foodItems) {
    console.log(index);
  }
  /*
   output for of
   bread
  milk
  egg
  rice
  
  */
  
  // for each
  
  let a = [1, 2, 3, 4];
  
  a.forEach((num) => console.log(num));
  
  /*
  output foreach
  1
  2
  3
  4
  */
  //----------------------------------------------------------------------------------------------------------------------------------
  