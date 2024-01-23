import Header from "./components/Header";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import axios from "axios";
import dataType from "./components/dataTypes";
import Jobs from "./components/Jobs";
import { Route, Routes } from "react-router-dom";
import SingleJobs from "./components/SingleJobs";

const baseUrl = "./../data/data.json";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [data, setData] = useState<(typeof dataType)[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<(typeof dataType)[]>([]);
  const [location, setLocation] = useState<string>("");
  // const [fullTimeCheck, setFullTimeCheck] = useState<string>("Full Time");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseUrl);
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  // SearchJob Input Logic
  const searchJob = () => {
    const searchTerm = search.trim().toLowerCase();

    if (searchTerm === "") {
      setFilteredData(data);
      return data;
    }

    const results = data.filter((item) => {
      return item.position.toLowerCase().includes(searchTerm);
    });

    setFilteredData(results);
    return results;
  };

  const locationSearch = () => {
    const locationTerm = location.trim().toLowerCase();

    if (locationTerm === "") {
      setFilteredData(data);
      return data;
    }

    const locationResults = data.filter((item) => {
      return item.location.toLowerCase().includes(locationTerm);
    });

    setFilteredData(locationResults);
    return locationResults;
  };

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode ? "bg-Midnight" : "bg-LightGrey"
      } duration-1000 transition-all`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Input
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                search={search}
                setSearch={setSearch}
                data={data}
                searchJob={searchJob}
                locationSearch={locationSearch}
                location={location}
                setLocation={setLocation}
                setFilteredData={setFilteredData}
              />
              <Jobs
                // data={data}
                darkMode={darkMode}
                filteredData={filteredData}
              />
            </>
          }
        />
        <Route path="/:id" element={<SingleJobs data={data} />} />
        {/* <Route path="/*" element={<Navigate to="/" replace />} /> */}
      </Routes>
    </div>
  );
};

export default App;
