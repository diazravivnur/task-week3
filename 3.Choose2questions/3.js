// ## A. Question
// Buatlah sebuah function untuk menghilangkan sebuah array sesuai dengan inputan kedua dan gambarkan flow chartnya. (Gunakan perulangan jangan pakai splice)
// Input-1 : [“a”,“b”,“c”,“d”,“e”]
// Input-2 : c
 // Output: [“a”,“b”,“d”,“e”]


// input-1
const inputAlphabet1 = ["A", "B", "C", "D", "E", "F"];

// input-2
const inputAlphabet2 = ['E']

// process delete input-2 in input-1
const deleteInput = inputAlphabet1.filter(function(currentValue) {
    return currentValue != inputAlphabet2
})

// output input-1 without input-2 in it
document.write(deleteInput)
