console.log("Loops");

let a=1;
console.log(a+1);
console.log("a+1");
console.log(a);
let i=0;
for ( i = 0; i < 4; i++) {
    console.log(i);
    
}


function nice(name){
    console.log("hey " + name + " you are nice");
}

nice("likith");

function sum(a,b){
    console.log(a+b);
}
sum(2,7);

const fun1 = (x)=>{
    console.log("i am a arrow function",x);
}
fun1(34);