
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

let a = 0;

 {
    let a = 3
    console.log(a);  
 }
 console.log(a);

 // spread and rest opertor

 function multiply(...nums) {  // rest
   console.log(nums[0] * nums[1]);
 }
 let arr = [10,3,6,7]
 multiply(...arr) // spread

function multiply2(a,x,y, ...num){
   console.log(x,y,num);
   console.log(typeof num);
   
}

multiply2(2,3,5,8,9,8,5)

// arrow function and normal function difference

function fn(){
 console.log(arguments);
}
fn(1,9,9,7)

// const fnn = () => console.log(arguments);
// fnn(1,1,2,1)

var names = "rakesh"

let obj1 = {
   names : "Cooper",
   fn1() {
      console.log("the name is "+ this.names);
   },

   fn2: () => {
      console.log("the name is "+ this.names);
   }
}

obj1.fn1()
obj1.fn2()

// reverse string

let str = "Cooper"
let element = "";
for (let i = str.length - 1; i >= 0 ; i--) {   
   element += str[i]
   console.log(str[i]);
}

console.log(element);

let arrstr = ["a","b","c","d","e","f"]
let ele1 = ""
let ele3 = ""
for (let i = arrstr.length - 1; i >= 0;  i--) {
   // ele1.push(arrstr[i])
   ele3 += arrstr[i]
}
let splitele = ele3.split("")
console.log(splitele);

let ele2 = []
for (let i = 0; i < arrstr.length; i++) {
   ele2.unshift(arrstr[i])
}
console.log(ele2);
console.log(splitele);





 
