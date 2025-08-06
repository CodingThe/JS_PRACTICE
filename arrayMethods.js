let arr= [1,2];
console.log(arr);
arr.push(3);
console.log(arr);
const val=arr.pop();
console.log(val);
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
console.log(arr.includes(1));
console.log(arr.indexOf(1));
console.log(arr.findIndex(num => num === 1));
let arr2=[3,4];
console.log(arr.concat(arr2));
let arr3=([...arr,...arr2]);
console.log(arr3);
console.log(arr.reverse());
let str='this is india';
console.log(str.split(' ').reverse().join(' '));
console.log(arr.toString());

let arrVal=[1,2,3,4,5,10];
arrVal.forEach((val)=>{
    console.log(val);
});

arrVal=arrVal.map((e)=>e*e);
console.log(arrVal);

console.log(arrVal.filter((e)=>e%5==0));

console.log(arrVal.reduce((acc,e)=>acc+e,0));

console.log(arrVal.find(e=>e==100));
console.log(arrVal.findIndex(e=>e==100));
console.log(arrVal.every(e=>e%5==0));
console.log(arrVal.some(e=>e%5==0));

let vals=[9,8,7,6];
vals=vals.flat(Infinity);
console.log(vals.flat(Infinity));
console.log(vals.splice(1,2,99,98));
console.log(vals);
console.log(vals.slice(1,3));

console.log(vals.sort());
console.log(vals.reverse());
console.log(vals.indexOf(98));