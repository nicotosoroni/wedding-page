import { Routes, Route } from 'react-router-dom';
import Body from './components/body';
import Schedule from './pages/schedule';
import MapPage from './pages/map';
import Photos from './pages/photos';
import Spotify from './pages/spotify';
import Register from './pages/register';
import FAQ from './pages/faq';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/pages/schedule" element={<Schedule />} />
        <Route path="/pages/map" element={<MapPage />} />
        <Route path="/pages/photos" element={<Photos />} />
        <Route path="/pages/spotify" element={<Spotify />} />
        <Route path="/pages/register" element={<Register />} />
        <Route path="/pages/faq" element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
