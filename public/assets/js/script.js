/* ES5 */
// alert("Hello Fati");
// console.log("Hi HajFati");
// var name = "Haj Fati";

// console.log(name);
// console.error(name);
// console.info(name);
// console.warn(name);

// function calcBMI(weight, height) {
//   var powHeight = (height / 100) * (height / 100);
//   return weight / powHeight;
// }

// var bmiFati = calcBMI(62, 163);
// console.log(bmiFati);

// var bmiMrAmin = calcBMI(87, 179);
// console.log(bmiMrAmin);

// function hasPerm(user) {
//     var perm = false
//     if (user.expiredAt < new Date(Date.now())) {
//         perm = true
//     }

//     return perm
// }

/* ES6 */
const name = "amin";
let date_time = new Date(Date.now());

date_time = new Date(Date.UTC());

console.log(date_time);

// name = "Haj Fati";

// console.log(name);

const hasPerm = (user) => {
  return user.expiredAt < new Date(Date.now());
};
