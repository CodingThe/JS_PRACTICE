function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const suc=true;
            if(suc){
                resolve("data fetched");
            }
            else{
                reject("data greate")
            }
        },2000);
    });
}

fetchUserData().then((data)=>{
    console.log("success");
}).catch((er))