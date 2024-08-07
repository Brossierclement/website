import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Stream from "./pages/stream/stream";

function App() {
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
    </BrowserRouter>
  );
}

export default App;
