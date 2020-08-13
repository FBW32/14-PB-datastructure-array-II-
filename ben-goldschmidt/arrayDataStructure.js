// These exercises are aimed at practicing arrays and array methods. Print each task to the console.


// TASK 1
// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = [
    "Paris",
    "London",
    "Valletta",
    "Prague",
    "Rome"
]
console.log(euroCities);
// [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]

let anotherVar = euroCities[1];
console.log(anotherVar);
// London


// TASK 2
// Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities);
// [ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]



// TASK 3
// Print the length of the array "euroCities".

console.log(euroCities.length);
// 5



// TASK 4
// Remove the last item of the array "euroCities".

delete euroCities[euroCities.length - 1];
console.log(euroCities);
// [ 'Berlin', 'London', 'Valletta', 'Prague', <1 empty item> ]


// TASK 5
// Add "Budapest" to the euroCities array.

euroCities[5] = "Budapest";
console.log(euroCities);
// ['Berlin', 'London', 'Valletta', 'Prague', <1 empty item>, 'Budapest']



// TASK 6
// Remove the second and third items from the euroCities array.

delete euroCities[1], delete euroCities[2];
console.log(euroCities);
// ['Berlin', <1 empty item>, 'Valletta', 'Prague', <1 empty item>, 'Budapest']


// TASK 7
// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

let asianCities = [
    "Hong Kong",
    "Japan",
    "Bangkok",
    "Singapore",
    "Manila"
]
console.log(asianCities);
// [ 'Hong Kong', 'Japan', 'Bangkok', 'Singapore', 'Manila' ]

let cloneAsianCities = [...asianCities];
console.log(cloneAsianCities);
// [ 'Hong Kong', 'Japan', 'Bangkok', 'Singapore', 'Manila' ]
