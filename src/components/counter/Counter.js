import React, {useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,setCustom } from '../../redox/state/counter/CounterSlice';

const Counter = () => {

   const myNumber = useRef();
    
   const count = useSelector((state)=>state.counter.value)
   const Dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="my-4">
                    <button onClick={()=>{Dispatch(increment())}} className="btn btn-success">Increase</button>
                    <button onClick={()=>{Dispatch(decrement())}} className="btn mx-2 btn-danger">Decrease</button>
                </div>
                <div className="my-4">
                    <input ref={myNumber} className='form-control w-50' type="number"/>
                    <button onClick={()=>{Dispatch(setCustom(myNumber.current.value))}} className='btn btn-danger my-2'>Set Custom</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;