// Task Week 1 number 11

// A. Question
// Terdapat array yang berisikan score hasil ujian siswa, tentukan nilai terendah, nilai tertinggi dan nilai rata-ratanya

// - Input : [80,45,30,45,70,70,80,90,91,88,80,83]
// - Output : Nilai Min, Nilai Max, Nilai Rata-rata

let score = [80,45,30,45,70,70,80,90,91,88,80,83];

const sortScore = score.sort(function(ascending, descending){return ascending-descending})
const scoreMin = Math.min(...score)
const scoreMax = Math.max(...score)

const scoreTotal = score.reduce(function(accumulator,currentValue) {return accumulator + currentValue})
const scoreAverage = scoreTotal / score.length

document.write(
"dengan input array " + score + "<br></br>" +
"nilai min dari input tersebut adalah " + scoreMin + "<br></br>" +
'nilai max dari input tersebut adalah ' + scoreMax + "<br></br>" +
'nilai rata rata dari input tersebut adalah ' + scoreAverage + "<br></br>")

