// ITERETOR 

let arr =["apple","mango","banana"];
 let iterator=arr[Symbol.iterator]()
 let result= iterator.next();
 console.log(result);
//  iterator.next();
//  console.log(iterator);

// let fruits = ["Apple", "Banana", "Orange"];

// let iterator = fruits[Symbol.iterator]();
// let result = iterator.next();
// // console.log(result);

// while (!result.done) {
//   console.log(result.value); // Print the current value
//   result = iterator.next(); // Move to the next element
// }


// GENERATORS



function *makeGenerator(){
    console.log("Message 1");
    yield  console.log("Message 8");
    console.log("Message 2");    
    yield  console.log("Message 10");
    yield  console.log("Message 14");
    console.log("Message 5");    
  }
  const gen = makeGenerator();
  gen.next();
  console.log("Message 30"); 
  gen.next();
  console.log("Message 61");
  gen.next();
  gen.next();
  console.log("Message 10");
  gen.next();

//   Promises

// let pro = new Promise(function(resolve,reject)
// {
// let num=10;
// if(num>10){
//     console.log("number is greater than 10");
// }
// })


// Promise
// function prom(){
//     return new Promise(function(resolve,reject){
//         let num = 10;
//         if(num > 10){
//             console.log("Number is greater than 10.");
//             resolve("Successfull");
//         }
//         else{
//             console.log("Number is less than 10.");
//             reject("Rejected");
//         }
//     })
// }
// prom().then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error); 
// })

// function pizzaOrder(){
// return new Promise(function(resolve,reject){
//     setTimeout(()=>{
// if(Math.random()< 0.3){
//     // console.log("pizza is ready");
//     resolve("success");
// }else{
//     // console.log("pizza order failed");
//     reject("rejected")
// }
//     },3000)
// })
// }

// pizzaOrder()

// function waitCount(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         },5000)
//     })
// }
// waitCount().then(() => {
//      for(let i = 1; i <= 5; i++){
//        setTimeout(() => {
//         console.log(i);
//        },i * 1000)
//      }
// })

// fetch

