// let a = 10
// let b = 20
// a = a--
// console.log(a);

// const lastName = "lovelace"

// const thirdLetterOfLastName = lastName[3]
// console.log(thirdLetterOfLastName);

// console.log(3 == 3);
// console.log(3 == "3");
// console.log(3 === "3");

// if (10)














// let arr = [1, 7, 2, 8, 3, 4, 5, 0, 9]
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (arr[i] < arr[j]) {
//       let temp = arr[i]
//       arr[i] = arr[j]
//       arr[j] = temp
//     }
//   }
// }
// console.log(arr);

// function orderMyLogic(val) {
//   if (val < 10 && val > 5) {
//     return "Less than 10";
//   } else if (val < 5) {
//     return "Less than 5";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }
// console.log(orderMyLogic(4));;

function sumAll(arr) {
  let min = Math.min(arr[0], arr[1])
  let max = Math.max(arr[0], arr[1])
  let result = 0
  for (let i = min; i <= max; i++) {
    result += i
  }
  return result
}
console.log(sumAll([20, 10]));;