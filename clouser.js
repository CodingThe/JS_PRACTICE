function outer(){
    let name="Hello";
    function inner(){
        console.log("This is country",name);
    }
    return inner;
}
const greet = outer();
greet();