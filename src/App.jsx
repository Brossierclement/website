import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/home";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <DataContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
