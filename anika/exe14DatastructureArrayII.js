// *********EXERCISE 14 - DATA STRUCTURE ARRAY II

// # Array Exercises
// ## These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = ["Stockholm", "London", 3, 4, "Istanbul"];
console.log(euroCities); // [ 'Stockholm', 'London', 3, 4, 'Istanbul' ]
let euroCitiesQ1 = euroCities.slice(1, 2);
console.log(euroCitiesQ1); // [ 'London' ]

// 2. Change the first item in the array to "Berlin".

euroCities.splice(0, 1, "Berlin");
console.log(euroCities); // [ 'Berlin', 'London', 3, 4, 'Istanbul' ]

// 3. Print the length of the array "euroCities".

console.log(euroCities.length); // 5

// 4. Delete the last item of the array "euroCities".

// delete euroCities[euroCities.length -1];
// console.log(euroCities);  [ 'Berlin', 'London', 3, 4, <1 empty item> ]

// delete euroCities[4];
// console.log(euroCities); // [ 'Berlin', 'London', 3, 4, <1 empty item> ]

euroCities.pop();
console.log(euroCities);

// 5. Add "Budapest" to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities); // [ 'Berlin', 'London', 3, 4, <1 empty item>, 'Budapest' ]

// 6. Delete the second and third items from the euroCities array.

euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 4, <1 empty item>, 'Budapest' ]

// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

let asianCities = ["Bangkok", false, "Chiang Mai", "Islamabad"];
let varQ7 = asianCities.slice(0, 4);
console.log(asianCities); // [ 'Bangkok', false, 'Chiang Mai', 'Islamabad' ]
console.log(varQ7); // [ 'Bangkok', false, 'Chiang Mai', 'Islamabad' ]
