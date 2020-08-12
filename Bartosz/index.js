// Array Exercises 
// These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = [
    "Paris",
    "London",
    "Valletta",
    "Prague",
    "Rome",
];
let secondItem = euroCities[1];
console.log(secondItem); // London

// 2. Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// 3. Print the length of the array "euroCities".
console.log(euroCities.length); // 5

// 4. Remove the last item of the array "euroCities". 
delete euroCities[euroCities.length -1];
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item> ]

// 5. Add "Budapest" to the euroCities array. 
euroCities[5] = "Budapest";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item>, 'Budapest' ]

// 6. Remove the second and third items from the euroCities array. 
euroCities.splice(1,2);
console.log(euroCities); // [ 'Berlin', 'Prague', <1 empty item>, 'Budapest' ]

// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCities = ["Tokio", "Seoul", "Delhi"];
let clone = asianCities.slice(); 

console.log(clone); // [ 'Tokio', 'Seoul', 'Delhi' ]
