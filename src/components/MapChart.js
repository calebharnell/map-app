import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = () => {
  const [data, setData] = useState([]);
  console.log(data)
  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map(geo => {
              const d = data.includes(geo.properties.ISO_A3);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => {
                    if (data.includes(geo.properties.ISO_A3)){
                      const index = data.indexOf(geo.properties.ISO_A3)
                      if (index > -1) {
                        if (data.length === 1) {
                          setData([])
                          return;
                        }
                        data.splice(index, 1);
                        setData([...data])
                      }
                      return;
                    }
                    setData([...data, geo.properties.ISO_A3])
                  }}
                  style={d ? {
                    default: {
                      fill: "#FF8C00",
                      outline: "none"
                    },
                    hover: {
                      fill: "#FFA500",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#FF8C00",
                      outline: "none"
                    }
                  } : {
                    default: {
                      fill: "#D6D6DA",
                      outline: "none"
                    },
                    hover: {
                      fill: "#FFA500",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#FF8C00",
                      outline: "none"
                    }
                  }
                  }
                />
              );
            })
          }
        </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
