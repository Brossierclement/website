import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate, json } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Stream from "./pages/stream/stream";
import Footer from "./components/footer/footer";
import { useEffect, useState } from "react";

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home/*" element={<Home />} />
          <Route path="stream" element={<Stream />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
