let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina',]
let nbor = []
let nyoq = []

for (let narsa of letterSearch) {
    if(narsa.includes("n")){
        nbor.push(narsa);
    }else {
         nyoq.push (narsa); 
    }
}

console.log (nbor);
console.log (nyoq);