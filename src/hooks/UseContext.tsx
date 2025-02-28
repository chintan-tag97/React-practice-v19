// useContext is a React Hook that allows you to share state or data between multiple components
//useContext is a React Hook that lets you read and subscribe to context from your component.

import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const UseContext = () => {
  return (
    <div>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    </div>
  );
};

export default UseContext;
