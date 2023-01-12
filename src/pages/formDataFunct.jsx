import React, { useState } from "react";

const HookUseStateExample = (props) => {
   const [counter, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: "First to do item" }]);
  function sum(){
    props.forAcceptChildState("test")
  }
  function setFname(){

    
  }


  return (
    <div>
      <h1>Hook: useState Example</h1>
      <button onClick={() => setCount((counter | 0) + 1)}> {counter}&nbsp;&nbsp;Count</button>
      &nbsp;<button onClick={sum} >send to Perent compenent </button>
      &nbsp;<button
        onClick={() => {
          setCount(counter + 1);
          setTodos([
            ...todos,
            { text: `Wazzup: State variable count = ${counter}` }
          ]);
        }}
      >
        Add Todo
      </button>
      <br/>
      <br/>
      <b>{props.send} </b> <span> function Based  </span> 
       <input type="text" name="fname"  onChange={setFname}  value={props.send} />
      <ul>
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseStateExample;
