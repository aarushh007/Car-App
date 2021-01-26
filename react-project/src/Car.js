import React from 'react'

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

export default Car