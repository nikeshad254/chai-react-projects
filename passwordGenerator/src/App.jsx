import { useCallback, useState, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [hasNum, setHasNum] = useState(false);
  const [hasSpecial, setHasSpecial] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const num = "1234567890";
    const special = "!@#$%^&*()_+";

    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasNum) {
      chars += num;
    }
    if (hasSpecial) {
      chars += special;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    setPassword(password);
  }, [length, hasNum, hasSpecial, setPassword]);

  const copyToClipboard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [hasNum, hasSpecial, length, passwordGenerator]);

  return (
    <div className=" flex flex-col gap-4 items-center">
      <h1 className=" text-2xl font-bold text-center mt-4">
        Password Generator
      </h1>

      <div className=" bg-slate-600  w-1/2 mx-auto flex flex-col gap-4 text-orange-300 p-2 rounded-md">
        <div className=" flex gap-2">
          <input
            type="text"
            className=" bg-white rounded-md text-slate-500 w-full px-2"
            value={password}
            placeholder="Generated Password"
            readOnly
            ref={passRef}
          />
          <button
            className="outline-none bg-blue-700 hover:bg-blue-500 px-3 py-0.5 shrink-0 rounded-md text-white"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2 justify-between">
          <div className="flex items-center gap-2">
            <input
              type="range"
              min={6}
              max={32}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="cursor-pointer"
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasNum}
              onChange={(e) => setHasNum(e.target.checked)}
              id="numbers"
            />
            <label htmlFor="numbers">Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={hasSpecial}
              onChange={(e) => setHasSpecial(e.target.checked)}
              id="special"
            />
            <label htmlFor="special">Special Characters</label>
          </div>
        </div>
      </div>

      <button
        className=" text-white bg-blue-700 hover:bg-blue-500 w-40 py-2 rounded-md "
        onClick={passwordGenerator}
      >
        Re-Generate
      </button>
    </div>
  );
}

export default App;
