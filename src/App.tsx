import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div
      className={`w-full min-h-screen ${
        darkMode ? "bg-Midnight" : "bg-LightGrey"
      } duration-1000 transition-all`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Input darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
};

export default App;
