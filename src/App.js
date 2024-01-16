import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/admin/dashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
