// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(number){
  let hasil = [];
  for (let i = 0; i < number.length; i++) {
    if(i < 3){
      hasil.push(7);
    }else{
      hasil.push(number[i]);
    }
  }
  return hasil;
}

console.log(result(arr1))