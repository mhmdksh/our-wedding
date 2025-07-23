import React, { useRef, useEffect } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import data from 'data.json';
import ErrorBoundary from '@/components/ErrorBoundary';

const MapComponent: React.FC<{ center: google.maps.LatLngLiteral; zoom: number }> = ({ center, zoom }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
        disableDefaultUI: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        gestureHandling: 'none',
      });

      new window.google.maps.Marker({
        position: center,
        map,
      });
    }
  }, [center, zoom]);

  return <div ref={ref} style={{ width: '100%', height: '300px' }} />;
};

const Map = () => {
  const { lat, lon, zoom } = data.mapInfo;
  const center = { lat, lng: lon };

  // For development/demo purposes, we'll show a fallback when no API key
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    return (
      <div style={{
        width: '100%',
        height: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        flexDirection: 'column'
      }}>
        <div style={{ fontSize: '16px', fontWeight: '500', color: '#666', marginBottom: '8px' }}>
          Map will be displayed here
        </div>
        <div style={{ fontSize: '14px', color: '#999' }}>
          Google Maps API key required
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Wrapper apiKey={apiKey}>
        <MapComponent center={center} zoom={zoom} />
      </Wrapper>
    </ErrorBoundary>
  );
};

export default Map;