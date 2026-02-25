const prompt = require ('prompt-sync')();

let nota1_b1 = parseFloat(prompt("qual sua nota1? "));
let nota2_b1 = parseFloat(prompt("qual sua nota2 ?"));
let rec_b1 = parseFloat(prompt("qual sua rec1?"));
let nota1_b2 = parseFloat(prompt("qual sua nota3 ?"));
let nota2_b2 = parseFloat(prompt("qual sua nota4 ?"));
let rec_b2 = parseFloat(prompt("qual sua rec2?"));

let media1 = (nota1_b1 + nota2_b1 )/ 2;
let media2 = (nota1_b2 + nota2_b2)/2; 

if (rec_b1 > media1 && media1 <= 5.9 ){
    media1 = rec_b1;
}
if (rec_b2 > media2 && media2 <= 5.9){
    media2 = rec_b2;
}

let mediaf = (media1 + media2) /2;

if (mediaf >=6 ){
    console.log("sua media final é: "+mediaf);
    console.log("aprovado")
}else{
    console.log("sua media final é: "+mediaf);
    console.log("reprovado") 
}


