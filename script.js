
function nameSet(){
    console.log("Cooper");
}

nameSet()


let nameees = () => { console.log("coopers"); }

 nameees()

 // First class function 

 function square(num){
    return num * num
 }

 function displayFun(fn){
    console.log("Square = "+ fn(5));
 }

 displayFun(square)

const a = 0;

 {
    const a = 3
    console.log(a);
    
 }
 console.log(a);
 
