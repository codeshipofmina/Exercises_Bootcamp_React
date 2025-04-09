import Home from "./Pages/Home";
import "./App.css";
import { themeContext } from "./contexts/themeContext";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </themeContext.Provider>
  );
}

export default App;
