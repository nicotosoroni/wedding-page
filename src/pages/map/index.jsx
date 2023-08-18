import Navbar from '../../components/navbar';
import Map from '../../components/map';
import { useLoadScript } from '@react-google-maps/api';

const MapPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAarenjFZ9pH61_5_0Px_PtaPnINiAGdQI',
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <h1>Mapa</h1>
      <Navbar />
      <p>Acá podes ver la ubicación del salón:</p>
      <Map />
    </div>
  );
};

export default MapPage;
