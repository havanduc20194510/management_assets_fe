import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/admin/dashBoard';
import Hardware from './pages/admin/hardware';
import Software from './pages/admin/software';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />}/>
        <Route path="/hardware" element={<Hardware />}/>
        <Route path="/software" element={<Software />}/>
        <Route path="/request" element={<DashBoard />}/>
        <Route path="/maintain" element={<DashBoard />}/>
        <Route path="/employees" element={<DashBoard />}/>
        <Route path="/category" element={<DashBoard />}/>
        <Route path="/create-assets" element={<DashBoard />}/>
        <Route path="/contact" element={<DashBoard />}/>
        <Route path="/statistical" element={<DashBoard />}/>
        <Route path="/setting" element={<DashBoard />}/>
        <Route path="/logout" element={<DashBoard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
