import React from "react"
import MetalMeta from "./MetalMeta"

function BandsSpace(props) {
 
  const { band_name, formed, origin, fans, split, style} = props
  var keyCount  = Object.keys(MetalMeta).length;
  return (
    <div>
      <h4>{keyCount}</h4>
      <h1>{band_name}</h1>
      <h3>{formed}</h3>
      <h3>{origin}</h3>
      <h3>{fans}</h3>
      <h3>{split}</h3>
      <h3>{style}</h3>
    </div>
  )
}

export default BandsSpace
