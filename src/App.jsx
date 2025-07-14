import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  const [color, setColor] = useState("pink");

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl/30 bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>

            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>

            <button
              onClick={() => setColor(getRandomColor())}
              className="outline-none px-4 py-1 rounded-full text-black shadow-xl/30 hover:shadow-lg active:scale-95 transition duration-200 ease-in-out  "
              style={{ backgroundColor: getRandomColor() }}
            >
              Random
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
