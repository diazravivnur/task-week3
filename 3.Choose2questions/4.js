// ## A. Question
// Buatlah sebuah function untuk menggabungkan 2 array berisikan integer dan jika nilainya sama hapus salah satu kemudian sort dari kiri kanan (kecil ke besar) dan gambarkan flow chartnya.
// Input-1: [1,3,4,1,5,6]
// Input-2: [7,2,4,1,5]
 // Output: [1,2,3,4,5,6,7]

 
// Input-1 Array integer
const inputArray1 = [1,3,4,1,5,6];
document.write("first array input : " + inputArray1 + "<br></br>")

// Input-2 Array integer
const inputArray2 = [7,2,4,1,5];
document.write("second array input : " + inputArray2 + "<br></br>")

// Process : Joins and sort both Arrays
var joinedArray = [...inputArray1, ...inputArray2];
joinedArray.sort(function(a,b) {
  return a - b ;
});

//output1 
document.write("joining both array with sorted from smallest to biggest number : " + joinedArray + "<br></br>")

let distinctArray = []
// Process : Sort and joined array without duplicate
for (i = 0 ; i < joinedArray.length ; i ++){
    if (!distinctArray.includes(joinedArray[i])){
      distinctArray.push(joinedArray[i])
    }
}
//output2
document.write("deleting duplicated index from array : " + distinctArray)
