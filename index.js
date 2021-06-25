function sumItems(array) {
  let sum = 0
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += sumItems(element);
    } else {
      sum += element; 
    }
  });
  return sum;
}



let data1 = [1, 2, 3, 4, 5];
let data2 = [[1, 2, [[3], 4]], 5, []];
let data3 = [[[[[[[[[[[[[1]]]]]]]]]]]]];

let result1 = sumItems(data1);
let result2 = sumItems(data2);
let result3 = sumItems(data3);


console.log(`Result for ${data1} is ${result1}`);
console.log(`Result for ${data2} is ${result2}`);
console.log(`Result for ${data3} is ${result3}`);

module.exports = sumItems;