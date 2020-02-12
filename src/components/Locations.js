import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import GoogleMap from 'google-map-react';

const LOAD_LOCATIONS = gql`
{
    loadLocations {
        latitude
        longitude
        location
    }
  }
`;

const mapStyles = {
    width: '100%',
    height: '100%'
  }

const markerStyle = {
    height: '20px',
    width: '20px',
    marginTop: '-50px'
  }

  const imgStyle = {
    height: '100%'
  }
const markerTitle = {
    color: '#f7f7f7',
    fontSize: '12px'
}

  const Marker = ({ title }) => (
    <div style={markerStyle}>
      <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
      <h3 style={markerTitle}>{title}</h3>
    </div>
  );

const Locations = () => {
    const { loading, error, data } = useQuery(LOAD_LOCATIONS);
    return (
        <GoogleMap
            style={mapStyles}
            bootstrapURLKeys={{ key: 'AIzaSyDIkB9akBrZCNrHuL5gv8QrV1j2U3QFqKg' }}
            center={{ lat: 8.6775, lng: 9.0778 }}
            zoom={7}
        >
            {
                data && data.loadLocations.map(location => (
                <Marker
                    key={location.location}
                title={location.location}
                lat={location.latitude}
                lng={location.longitude}
                />
                ))
            }
        </GoogleMap>
    )
}

export default Locations;
