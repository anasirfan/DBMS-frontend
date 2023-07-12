
import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/about";
import Apply from "./components/apply";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />

        
      </Routes>
    </Router>
  );
}

export default App;