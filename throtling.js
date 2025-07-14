function throttle(func, limit) {
  let lastCall = 0;
  return function () {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func();
    }
  };
}

function sayHello() {
  console.log("👋 Hello!");
}

const throttledHello = throttle(sayHello, 1000);

setInterval(() => {
  throttledHello();
}, 200);
