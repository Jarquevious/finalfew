import React from "react";
import data from "./metal.js";
import BandsSpace from "./BandsSpace"

function MetalMeta() {

  const bands = data.map(( obj ) => {

        return (
          <BandsSpace
          id={obj.id}
          key={`${obj.band_name}-${obj.id}`}
          band_name={obj.band_name}
          formed={obj.formed}
          origin={obj.origin}
          fans={obj.fans}
          split={obj.split}
          style={obj.style}
           />
        )
      })
      return (
        <div className="Bandspace">
          { bands }
        </div>
      )}
export default MetalMeta