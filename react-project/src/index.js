import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const cars = [
  {
    id: 1,
    img: "https://rb.gy/h7ukq1",
    model: "Lamborghini Centenario",
    year: "2016"
  },
  {
    id: 2,
    img: "https://rb.gy/ddd5c4",
    model: "Porsche Taycan Turbo S",
    year: "2021"
  },
  {
    id: 3,
    img: "https://rb.gy/wijyzp",
    model: "Bugatti Chiron",
    year: "2020"
  },
  {
    id: 4,
    img: "https://rb.gy/sgf2m1",
    model: "McLaren 720s",
    year: "2019"
  }
];

function Carlist() {
  return (
    <section className="carlist">
      {cars.map((car) => {
        return <Car key={car.id} {...car}></Car>;
      })}
    </section>
  );
}

const Car = (props) => {
  const getCar = (model, year) => {
    if (model === "McLaren 720s") {
      console.log(model, year, ": Buy this one!");
    } else {
      console.log(model, year);
    }
  };
  const { img, model, year } = props;
  return (
    <article className="car">
      <img src={img} width="70%" alt={model} />
      <h3>{model}</h3>
      <h4>{year}</h4>
      <button onClick={() => console.log("Nice Click!")}>Click me</button>
      <br />
      <button onClick={() => getCar(model, year)}>get model and year</button>
    </article>
  );
};

ReactDOM.render(<Carlist />, document.getElementById("root"));
