console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [
    2, 
    22,
    12,
    17,
    18,
    39,
    129
]

let sum = 0;

function arraySum (array){
array.forEach(function (number){
sum+=number;
return sum;
})
console.log(sum);
}

arraySum(numbers);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {}

book.title = "Guns, Germs, and Steel";
book.author = "Jared Diamond";
book.pages = 480;
book.readCount = 1;
book.info = function(){
    return `${this.title} is ${this.pages} pages long. It has been read ${this.readCount} times.`
}

console.log(book.info());

//Exercise 3
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence){
    let newSentence = []
    let words = sentence.split(" ");
    for(let i = 0; i<words.length; i++){
        let reversedLetters = words[i].split("").reverse();
        let reversedWords = reversedLetters.join("");
        newSentence.push(reversedWords);
    }
    return newSentence.join(" ")
}

console.log(reverseWords(sentence));

//Exercise 4
console.log("EXERCISE 4:\n==========\n");
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function dataConverter(data){
    var values = csvData.split("\n");
    var arr = [];
    values.forEach(function(item, idx){
        if(idx == 0){
            return;
        }
        else{
        let obj = {};
        var splitValues = item.split(",");
        obj["Name: "] = splitValues[0];
        obj["Age: "] = splitValues[1];
        arr.push(obj);
    }
    })
    return arr;
}
console.log(dataConverter(csvData));



 






















