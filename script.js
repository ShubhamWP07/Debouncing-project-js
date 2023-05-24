// Debouncing function
function debounce(callback, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

// Event handler
function handleInput(event) {
  const output = document.getElementById("output");
  output.textContent = event.target.value;
}

// Debounced event handler
const debouncedHandleInput = debounce(handleInput, 300);

// Attach event listener
const input = document.getElementById("input");
input.addEventListener("input", debouncedHandleInput);
