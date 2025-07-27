// <div id="parent">
//  <button id="child">Submit</button>
// </div>

document.getElementById(parent).addEventListener("click",

    ()=>{
        console.log("Parent");
    },
    true
)

document.getElementById(parent).addEventListener("click",

    ()=>{
        console.log("Child");
    }
)