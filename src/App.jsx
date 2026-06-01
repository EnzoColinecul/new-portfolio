import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import SpliteaProject from './pages/SpliteaProject/SpliteaProject';
import CrystalCarpetProject from './pages/CrystalCarpetProject/CrystalCarpetProject';

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <BrowserRouter basename="/new-portfolio">
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/splitea-project" element={<SpliteaProject />} />
        <Route path="/crystal-carpet-project" element={<CrystalCarpetProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
