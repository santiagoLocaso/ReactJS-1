/* eslint-disable react/prop-types */
import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ stock, onAdd, initial=1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock ? setContador(contador + 1) : "";
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />;
};

export default CounterContainer;
