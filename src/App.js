import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogoPage from "./pages/LogoPage/LogoPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GetStartedPage } from "./pages/GetStartedPage/GetStartedPage";
import { PricesPage } from "./pages/PricesPage/PricesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import ReserveCompletePage from "./pages/ReserveCompletePage/ReserveCompletePage";
import FichaComponent from "./components/FichaComponent/FichaComponent";
import DetalleReservaComponent from "./components/DetalleReservaComponent/DetalleReservaComponent";

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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/complete" element={<ReserveCompletePage />} />
          <Route path="/ficha" element={<FichaComponent />} />
          <Route path="/DetalleReserva" element={<DetalleReservaComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
