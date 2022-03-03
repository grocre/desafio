import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./pages/AddCard";
import App from "./pages/App";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/addCard" element={<AddCard/>} />
      <Route path="/" element={<App/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
