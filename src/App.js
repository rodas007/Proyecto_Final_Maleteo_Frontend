import "./App.scss";
import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate,NavLink, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LogoPage from "./pages/LogoPage/LogoPage";
import { WelcomePage } from "./pages/WelcomePage/WelcomePage";
import { GetStartedPage } from "./pages/GetStartedPage/GetStartedPage";
import { PricesPage } from "./pages/PricesPage/PricesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import ReserveCompletePage from "./pages/ReserveCompletePage/ReserveCompletePage";
import { JwtContext } from './context/JwtContext';
import RequireAuth from './components/RequireAuth/RequireAuth';
import DetalleEspacio from "./components/Detalle-espacio/DetalleEspacio";



function App() {

  const [jwt, setJwt] = useState(localStorage.getItem('token') || null);
  
  



  return (

<JwtContext.Provider value={{ jwt, setJwt }}>

    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<LogoPage />} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/getstarted" element={<GetStartedPage />} />
          <Route path="/prices" element={<PricesPage />} />
          <Route path="/detalleespacio" element={<DetalleEspacio/>} />

          
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/complete" element={<RequireAuth><ReserveCompletePage /></RequireAuth>} />
          <Route path="/*" element={<Navigate to="/login"/>}/>
        </Routes>
      </div> 
    </Router>
</JwtContext.Provider>


  );
}

export default App;
