

let dna = ["A","T","G","C","C","G","A","A","A","T","T","T","G","C","G"];

let rna = {
    "A":"U",
    "T":"A",
    "C":"G",
    "G":"C"
}

for (let i = 0; i < dna.length; i++) {
    let givenDna = dna[i];
    let resultRna = rna[givenDna];

    if(givenDna !== undefined){
        dna[i] = resultRna
    }
}

console.log(dna.join(""))



let girl = ["X","E","N","I","A"]

let boy = {
    "X": "R",
    "E": "A",
    "N": "M",
    "I": "O",
    "A": "N"
}

for (let i = 0; i < girl.length; i++){
    let gilfriend = girl[i];
    let boyfriend = boy[gilfriend];

    if(boyfriend !== undefined){
        girl[i] = boyfriend
    }
}

console.log(girl.join(""));