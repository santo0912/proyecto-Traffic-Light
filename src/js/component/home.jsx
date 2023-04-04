import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [color, setColor] = useState("")


  return (
    
      <div className="caja">
        <div onClick={()=> setColor("rojo")} className={`${color=="rojo"? "glow":""} circulo rojo ligth`}></div>
        <div onClick={()=> setColor("amarillo")} className={`${color=="amarillo"? "glow":""} circulo amarillo ligth`}></div>
        <div onClick={()=> setColor("verde")} className={`${color=="verde"? "glow":""} circulo verde ligth`}></div>
      </div>
   
  );
};

export default Home;
