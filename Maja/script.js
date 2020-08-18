/* 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value. */

let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities); // [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]
let pl = "Poland";
console.log(pl); // Poland

euroCities.splice(1, 0, "Poland");
console.log(euroCities); // [ 'Paris', 'Poland', 'London', 'Valletta', 'Prague', 'Rome' ]

/* 2. Change the first item in the array to "Berlin".
 */
euroCities.shift();
console.log(euroCities); //   [ 'Poland', 'London', 'Valletta', 'Prague', 'Rome' ]

euroCities.unshift("Berlin");
console.log(euroCities); //  [ 'Berlin', 'Poland', 'London', 'Valletta', 'Prague', 'Rome' ]

/* 3. Print the length of the array "euroCities".
 */
console.log(euroCities.length); // 6

/* 4. Delete the last item of the array "euroCities".
 */
console.log(euroCities.pop()); // Rome
console.log(euroCities); // [ 'Berlin', 'Poland', 'London', 'Valletta', 'Prague' ]

/* 5. Add "Budapest" to the euroCities array.
 */
/* let Budap = "Budapest"; */
euroCities.push(`Budapest`);
console.log(euroCities); // [ 'Berlin', 'Poland', 'London', 'Valletta', 'Prague', 'Budapest' ]

/* 6. Delete the second and third items from the euroCities array.
 */
euroCities.splice(1, 2);
console.log(euroCities); // [ 'Berlin', 'Valletta', 'Prague', 'Budapest' ]

/* 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities. */

let asianCities = [`${euroCities}`];
console.log(asianCities); // [ 'Berlin,Valletta,Prague,Budapest' ]

let asiaCitiesClone = asianCities.map((x) => x);
console.log(asiaCitiesClone);
