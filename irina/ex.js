// Array Exercises
// These exercises are aimed at practicing arrays and array methods. Print each task to the console.

// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let city1 = euroCities[1];
console.log(city1);

// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]

// Print the length of the array "euroCities".
console.log(euroCities.length) //5

// Remove the last item of the array "euroCities".
delete euroCities [euroCities.length-1];
console.log(euroCities); // [ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item> ]

// Add "Budapest" to the euroCities array.
euroCities[5] = "Budapest";
console.log(euroCities); /*[ 'Berlin',
'London',
'Valletta',
'Prague',
<1 empty item>,
'Budapest' ] */

// Remove the second and third items from the euroCities array.
euroCities.splice(1,2);
console.log(euroCities); // [ 'Berlin', 'Prague', <1 empty item>, 'Budapest' ]

// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
let asianCities = [
    'Seoul',
    'Taipei',
    'Hanoi',
    'Manila'
];
let asianCitiesClone = [].concat(asianCities);
console.log(asianCitiesClone); // [ 'Seoul', 'Taipei', 'Hanoi', 'Manila' ]


//Exemplo: 
const original = [1, 2, 3] ; 
const clone = [3, 4, 5].concat(original);
console.log(clone);  // [ 3, 4, 5, 1, 2, 3 ]