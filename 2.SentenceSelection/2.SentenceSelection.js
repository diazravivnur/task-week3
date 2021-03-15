// ## A. Question
// Buatlah sebuah function sederhana untuk melakukan pencarian terhadap sebuah kalimat berdasarkan kata yang diinputkan. Jika kata ditemukan printlah kalimat yang menjadi bagian dari kata tersebut.
// - Input: “hello”, “hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all.
// - Output: hello world oke lorem ipsum dolor, Hello all.
// Noted : Gunakan HOF

var inputText = 'hello world oke lorem ipsum dolor. Aku mau belajar react.js. Hey kamu mau kemana?. Kapan kita jalan bareng lagi. Hello all.';
inputText = inputText.toLowerCase();
var result = '';

var inputSentence = inputText.split('.');
for(var i = 0; i < inputSentence.length; i++) {
    var word = [];
    word = inputSentence[i].split(' ');
    for(var y = 0; y < word.length; y++) {
        if(word[y] == 'hello') {
            result += inputSentence[i] + '<br/>';
        }
    }
}
document.write(result);
