const user = {
    name:"India",
    city:"New Delhi"
}
const user1 = {
    country:"greate",
    ccity:"very greate"
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const merged = Object.assign({},{...user},{...user1});
console.log(merged);


const cloned=structuredClone(user1);
const cloned1=JSON.parse(JSON.stringify(user1));
console.log(cloned);
console.log(cloned1);

const val={
    sayHello(){
        console.log("hi");
    }
}

const sayHi=Object.create(val);
sayHi.sayHello();

console.log(Object.getPrototypeOf(sayHi)==val)

let obj={
    name:"india",
    hi:"hi"
}
Object.freeze(obj);
obj.res="hi";
console.log(obj);


let obj1={
    name:"india",
    hi:"hi"
}
Object.seal(obj);
obj1.hi="hello";
console.log(obj1);

console.log(Object.isFrozen(obj));

console.log(Object.hasOwn(obj,"name"));
