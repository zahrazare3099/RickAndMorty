import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Location from "./pages/Location";
import Episod from "./pages/Episod";
import Characters from "./pages/Characters";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Location" element={<Location />} />
          <Route path="Episod" element={<Episod />} />
          <Route path="Characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
