import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeSwitch from "./components/ThemeSwitch";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.querySelector("html")?.classList.remove("light", "dark");
    document.querySelector("html")?.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <h1 className=" text-3xl font-bold py-4 text-center">
        Toggle Theme Context API
      </h1>

      <ThemeSwitch />

      <ProfileCard />
    </ThemeProvider>
  );
}

export default App;
