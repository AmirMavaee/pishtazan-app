import ReactDOM from "react-dom/client";
//component
import App from "./App.jsx";
//react router dom
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
