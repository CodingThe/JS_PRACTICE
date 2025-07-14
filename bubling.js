{/* <div id="outer">
  <button id="inner">Click Me</button>
</div> */}

document.getElementById("outer").addEventListener("click", () => {
  console.log("Outer Div Clicked");
});

document.getElementById("inner").addEventListener("click", () => {
  console.log("Button Clicked");
});
