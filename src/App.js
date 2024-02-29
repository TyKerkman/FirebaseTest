import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Profile from './pages/Profile'
import Layout from './pages/Layout'


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
