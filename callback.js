function greet(name,callback){
    console.log("Hi",name);
    callback();
}

greet("India",sayHello);

function sayHello(){
    console.log("Hello");
}