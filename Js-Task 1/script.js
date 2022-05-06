
const array = [1, 2, 3, 4, 5, 6, 7, 8];

/* CustomMap Method */

// Array.prototype.customMap = function (callBackFunction) {
//     const newArray = []
//     for (let i = 0; i < this.length; i++) {
//             newArray.push(callBackFunction(this[i], i, this));
//     }
//     return newArray
// }

// const result = array.customMap((element, index, array) => {
//     return element * 2
// })

// console.log(result)

/* CustomReduce Method */

// Array.prototype.customReduce = function (callBackFunction,initValue=0) {
//     let a = 0

//     for (let i = 0; i < this.length; i++) {
//         callBackFunction((a+=this[i]))
//     }
//     return a + initValue
// }

// const result = array.customReduce((acc, element) => {
//   return acc + element
// })

// console.log(result)


/* CustomFilter Method */

// Array.prototype.customFilter = function (callBackFunction) {
//     const filter = []

//         for (let i = 0; i < this.length; i++) {
//             if (callBackFunction(this[i])){
//                 filter.push(this[i])
//             }
//         }
//     return filter;
// }

// const result = array.customFilter((element, index, array) => {
//   if (element > 3) return element;
// });

// console.log(result)

/* CustomSome Method */

// Array.prototype.customSome = function (callBackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     if (callBackFunction(this[i], i, this)) {
//       return true;
//     }
//     }
//     return false;
// };

// const result = array.customSome((element, index, array) => element >= 8);

// console.log(result)

/* CustomEvery Method */

// Array.prototype.customEvery = function (callBackFunction) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callBackFunction(this[i], i, this)) {
//       return false;
//     }
//     }
//     return true;
// };

// const result = array.customEvery((element, index, array) => element >2);

// console.log(result)

/* CustomForEach Method */

Array.prototype.customForEach = function (callBackFunction) {
    for (let i = 0; i < this.length; i++) {
        (callBackFunction(this[i], i, this));
    }
}

const result = array.customForEach((element, index, array) => {
    console.log(element);
})
