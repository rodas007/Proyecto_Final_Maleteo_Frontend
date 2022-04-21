import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <Router>
   
   

    <div className="container">
      

        <Routes>
          <Route path="/" element={<HomePage/>} />
          
        </Routes>
     
    </div>
  </Router>
);
}

export default App;
