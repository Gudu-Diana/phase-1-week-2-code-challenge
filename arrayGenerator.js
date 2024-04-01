// Function to generate an array of numbers between start and end
function arrayGenerator(start, end) {
    const result = []; 
    for (let i = start; i <= end; i++) { // Iterating from start to end (inclusive)
        result.push(i); // Pushing each number to the result array
    }
    return result;
}

// Testing using example given
const array1 = arrayGenerator(4, 7); // Generate array between 4 and 7
console.log(array1); // Output: [4, 5, 6, 7]