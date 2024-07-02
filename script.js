// let number = 0;
// const button = document.querySelector("#button");
// const display = document.querySelector("#display");

// button.addEventListener("click", () => {
//   number++;
//   display.textContent = number;
// })

const { createRoot } = ReactDOM;

console.log(ReactDOM);

const domContainer = document.querySelector("#root");
const root = createRoot(domContainer);

function App() {
  return <h1>Hello world</h1>;
}

root.render(<App />);
