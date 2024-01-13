import Header from "./components/Header";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";
import dataType from "./components/dataTypes";
import Jobs from "./components/Jobs";

const baseUrl = "./../data/data.json";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [data, setData] = useState<(typeof dataType)[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // SearchJob Input Logic
  const searchJob = () => {
    const results = data.filter((item) => {
      return item.position.toLowerCase().includes(search.toLowerCase());
    });

    if (results.length === 0) {
      console.log("No jobs");
    }

    console.log(results);
    return results;
  };

  searchJob();

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode ? "bg-Midnight" : "bg-LightGrey"
      } duration-1000 transition-all`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Input
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        search={search}
        setSearch={setSearch}
        data={data}
      />
      <Jobs data={search.length > 0 ? searchJob() : data} darkMode={darkMode} />
    </div>
  );
};

export default App;
