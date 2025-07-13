// //concatinate
// let var1 = "Prakash";
// let var2 = "Thakur";
// console.log(var1+var2);

// //clouser
// let name = "Hi";

// function outer() {
//   let name = "Hello";

//   function greet() {
//     console.log(name);
//   }

//   greet();
// }

// outer();

// //falsy
// if (0) {
//   console.log("This will NOT run");
// }

// if ("") {
//   console.log("This will NOT run");
// }

// //truthy
// if ("Hello") {
//   console.log("This WILL run");
// }

// if ([]) {
//   console.log("Even empty array is truthy");
// }

// // create 
// function createElement(){
//     const val= document.createElement("h1");
//     val.textContent("Hi");
//     val.setAttribute('class','india');
// }


//use of this

    // //global    
    //     console.log(this);

    // //normal function
    // function hi(){
    //     console.log(this);
    // }
    // hi();

    // //object functoion method
    // const val={
    //     hi:"hi",
    //     greet: function vl(){
    //         console.log(this.hi);
    //     }
    // }
    // val.greet();

    // //object arrow function
    // const gen={
    //     hi:"hi",
    //     greet: ()=>{
    //         console.log(this.hi);
    //     }
    // }
    // gen.greet();

    // //constructor
    // function g(name){
    //     this.name=name;
    // }
    // const gs=new g("g");
    // console.log(gs.name);

