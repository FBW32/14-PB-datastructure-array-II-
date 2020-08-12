// 12.08.2020
// EXERCISE 1
// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = [
    'Paris', 
    'London',
    'Valleta',
    'Prague',
    'Rome'
];
console.log(euroCities);

let euroCitys = (euroCities[2]);
console.log(euroCitys);

// EXERCISE 2
// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);

// EXERCISE 3
// Print the length of the array "euroCities".
console.log(euroCities.length);

// EXERCISE 4
// Delete the last item of the array "euroCities".
delete euroCities[4];
console.log(euroCities);

// EXERCISE 5
// Add "Budapest" to the euroCities array.
euroCities[6] = "Budapest";
console.log(euroCities);

// EXERCISE 6
// Delete the second and third items from the euroCities array.
delete euroCities[2],[3];
console.log(euroCities);

// EXERCISE 7
// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCities = [];
let clone = [ asianCities ]
console.log(clone);