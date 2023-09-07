import { useMemo } from 'react';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

import { StyledMap } from './styles';

export default function Map() {
  const center = useMemo(() => ({ lat: -33.190979, lng: -66.343171 }), []);

  return (
    <StyledMap>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF position={center} />
      </GoogleMap>
    </StyledMap>
  );
}
