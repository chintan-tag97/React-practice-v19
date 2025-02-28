import { useTheme } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      } p-4 transition-all`}
    >
      <h1 className="text-2xl font-bold">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
