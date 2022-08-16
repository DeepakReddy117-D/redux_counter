import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {increase , decrease , increaseByAmount} from "./Redux/Action"

function App() {

  const count = useSelector(
    (state) => state.value
  )
  const dispatch = useDispatch()


  return (

    <>

      <div className="App">
        <h4 className='text-success mx-auto p-3  mt-5  '>
          <u >
            This is  a Redux Component</u>
        </h4>
        <div className='mx-auto  mb-5'>

          <button className='btn btn-success p-2 mx-5' onClick={()=>dispatch(increase())}> Increment </button>
          <span> {count} </span>
          <button className='btn btn-danger p-2 mx-5' onClick={()=>dispatch(decrease())}> Decrement </button>
          <button className='btn btn-secondary p-2 mx-5' onClick={()=>dispatch(increaseByAmount(5))}> increase to  5 </button>


        </div>

      </div>

    </>);
}

export default App;
