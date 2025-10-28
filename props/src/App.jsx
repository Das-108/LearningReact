import React from "react";
import Card from "./componets/card"

export default  function App () {
  return (
    <>
      <div className="parent">
        <Card user = 'Nityanada'/>
        <Card  user = 'Gaurnaga'/>
      </div>
    </>
  )
}