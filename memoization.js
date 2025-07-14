function slowFunction(n){
    console.log("calculating");
    return n*n;
}
const memoized = (()=>{
    const cache={};
    return function(n){
        if(cache[n]){
            return cache[n];
        }
        const result =slowFunction(n);
        cache[n]=result;
        return result;
    }
})();
console.log(memoized(9)); 
console.log(memoized(9));