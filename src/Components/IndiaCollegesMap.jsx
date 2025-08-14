import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import indiaGeo from "../assets/india.json";
import collegeData from "../assets/dummydata";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const colorScale = scaleLinear()
  .domain([0, Math.max(...Object.values(collegeData))])
  .range(["#f0f0f0", "#0055aa"]);

const IndiaMap = () => {
  return (
    <>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 22.5937],
        }}
        style={{ width: "100%", height: "600px" }}
      >
        <Geographies geography={indiaGeo}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateName =
                geo.properties.NAME_1 ||
                geo.properties.st_nm ||
                geo.properties.name;
              const collegeCount = collegeData[stateName] || 0;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(collegeCount)}
                  data-tooltip-id="state-tooltip"
                  data-tooltip-content={`${stateName}: ${collegeCount} colleges`}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#ff9933", outline: "none" },
                    pressed: { fill: "#cc6600", outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>

      <ReactTooltip id="state-tooltip" />
    </>
  );
};

export default IndiaMap;
