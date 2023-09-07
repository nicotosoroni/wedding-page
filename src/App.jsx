import { Routes, Route } from 'react-router-dom';
import Body from './components/body';
import Schedule from './pages/schedule';
import MapPage from './pages/map';
import Photos from './pages/photos';
import Spotify from './pages/spotify';
import Register from './pages/register';
import FAQ from './pages/faq';
import TourPage from './pages/tour';
import GuestList from './pages/guestList';
import Gift from './pages/gift';

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
        <Route path="/pages/turismo" element={<TourPage />} />
        <Route path="/pages/faq" element={<FAQ />} />
        <Route path="/pages/list" element={<GuestList />} />
        <Route path="/pages/gift" element={<Gift />} />
      </Routes>
    </div>
  );
}

export default App;
