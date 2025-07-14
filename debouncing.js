function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function sayHello() {
  console.log(" Hello!");
}

const debouncedHello = debounce(sayHello, 1000);

debouncedHello();
debouncedHello();
debouncedHello();