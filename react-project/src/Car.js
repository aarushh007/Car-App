import React from 'react'

const Car = (props) => {
  const getCar = () => {
    alert('Thanks for buying! My paypal is elon_lover_264, please send the money there.')
  };
  const { img, model, year, price } = props;
  return (
    <article className="car">
      <img src={img} width="70%" alt={model} />
      <h3>{model}</h3>
      <h4>{year}</h4>
      <h2>{price}</h2>
      <br />
      <button onClick={() => getCar()}>Buy Car</button>
    </article>
  );
};

export default Car;