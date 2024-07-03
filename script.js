

const { createRoot } = ReactDOM;

// console.log(ReactDOM);

const domContainer = document.querySelector("#root");
const root = createRoot(domContainer);

function Increment() {
  const [counter, setCounter] = React.useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1)
  }
  // console.log(state);
  return (
    <div>
      <div id="display">{ counter }</div>
      <button id="button" type="button" onClick={incrementCounter}>Increment+</button>
    </div>
  );
}

root.render(
  <div>
    <Increment />
    <Increment />
    <Increment />
  </div>
);


// let number = 0;
// const button = document.querySelector("#button");
// const display = document.querySelector("#display");

// button.addEventListener("click", () => {
//   number++;
//   display.textContent = number;
// })