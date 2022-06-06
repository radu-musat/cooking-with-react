import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";

function CounterHooks({ initialCount }) {
  
// const [state, setState] = useState({ count: initialCount });
//   <button
//   onClick={() =>
//     setState((prevState) => {
//       return { count: prevState.count - 1 };
//     })
//   }
// >
//   -
// </button>

  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);

  return (
    <div>
      <button style={ style } onClick={ ()=> setCount(prevCount => prevCount - 1) }> - </button>
      <span>{ count }</span>
      <button style={ style } onClick={ ()=> setCount(prevCount => prevCount + 1) }> + </button>
    </div>
  );
}

export default CounterHooks;
