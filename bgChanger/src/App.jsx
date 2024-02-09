import { useState } from "react";

const colors = ["red", "blue", "green", "yellow", "purple"];

function App() {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  return (
    <div
      className=" w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: currentColor }}
    >
      <h1 className="text-2xl font-bold stroke-white text-black uppercase">
        {currentColor}
      </h1>

      <ul className=" absolute right-8 bg-white top-8 flex flex-col gap-6 p-4 rounded-md">
        {colors.map((color, index) => (
          <li
            key={index}
            className=" h-10 w-10 rounded-md cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => setCurrentColor(color)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
