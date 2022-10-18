import React from "react";
import GoogleMapReact from "google-map-react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const AnyReactComponent = (props: { text: any }) => <div>{props.text}</div>;

export const Map = (props: { location: any; zoomLevel: any }) => {
  const { location, zoomLevel } = props;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </div>
  );
};
