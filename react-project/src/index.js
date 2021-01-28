import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {cars} from "./cars";
import Car from "./Car";

function Carlist() {
  return (
    <section className="carlist">
      {cars.map((car) => {
        return <Car key={car.id} {...car}></Car>;
      })}
    </section>
  );
}

ReactDOM.render(<Carlist />, document.getElementById("root"));
