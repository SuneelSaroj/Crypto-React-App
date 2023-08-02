import React from "react";

const Coin = (props) => {
  return (
    <div className="coin">
      <img src={props.coin.image} alt="" />
      <h2>{props.coin.symbol}</h2>
      <p>{props.coin.name}</p>
      <h4>Rs. {props.coin.current_price}</h4>
    </div>
  );
};

export default Coin;
