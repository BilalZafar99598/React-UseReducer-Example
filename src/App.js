import { useState, useReducer } from "react"

const reducer = (state, action) => {
  switch(action.type){
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'newUserInput':
      return { ...state, userInput: action.payload }
    case 'tgColor':
      return { ...state, color: !state.color }
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: '',
    color: false
  })
  // const [userInput, setUserInput] = useState('');
  // const [color, setColor] = useState();
  // const [count, setCount] = useState(0);


  // const handleChange = (e) => {
  //   setUserInput(e.target.value);
  // }
  
  return (
    <main className="App" style={{ color: state.color ? '#FFF' : '#FFF952' }}>
        <input
          type="text"
          value={state.userInput}
          placeholder="User Input"
          onChange={(e) => dispatch({ type: 'newUserInput', payload: e.target.value })}
          />
          <br />
          <p>{state.userInput}</p>
          <p>Count: {state.count}</p>
          <section>
              <button onClick={() => dispatch({type: 'increment'})}>+</button>
              <button onClick={() => dispatch({type: 'decrement'})}>-</button>
              <button onClick={() => dispatch({type: 'tgColor'})}>color</button>
          </section>
    </main>
  )
}

export default App
