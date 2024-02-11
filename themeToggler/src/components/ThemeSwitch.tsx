import useTheme from "@/context/theme";
import { Switch } from "./ui/switch";

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-4 justify-center">
      <Switch
        className="dark:bg-slate-100"
        id="toggleSwitch"
        onCheckedChange={toggleTheme}
      />
      <label htmlFor="toggleSwitch" className=" capitalize">
        {theme} Mode
      </label>
    </div>
  );
}

export default ThemeSwitch;
