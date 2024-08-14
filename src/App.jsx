import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate, json } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Stream from "./pages/stream/stream";
import Footer from "./components/footer/footer";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("/data.json");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <DataContext.Provider value={data}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Navigate to="home" replace />} />
                <Route path="home/*" element={<Home />} />
                <Route path="stream" element={<Stream />} />
              </Route>
            </Routes>
            <Footer data={data} />
          </BrowserRouter>
        </DataContext.Provider>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default App;
