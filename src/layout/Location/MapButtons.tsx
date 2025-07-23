import styled from '@emotion/styled';
import data from 'data.json';
import Button from '@/components/Button.tsx';

const MapButtons = () => {
  const { lat, lon, zoom } = data.mapInfo;
  const googleMapsUrl = `https://maps.google.com/maps?q=${lat},${lon}&z=${zoom}`;

  return (
    <MapButtonWrapper>
      <Button onClick={() => window.open(googleMapsUrl)}>Open in Google Maps</Button>
    </MapButtonWrapper>
  );
};

export default MapButtons;

const MapButtonWrapper = styled.div`
  margin: 8px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;