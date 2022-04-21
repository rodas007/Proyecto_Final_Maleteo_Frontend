import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogoPage from "./pages/LogoPage/LogoPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GetStartedPage } from "./pages/GetStartedPage/GetStartedPage";
import { PricesPage } from "./pages/PricesPage/PricesPage";

function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
          <Route path="/prices" element={<PricesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
