import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/counterSlice'
import { useState } from 'react'

function Counter() {
  //state to hold the value from input box
  const [range,setRange]=useState('')

  //hook to dispatch a function in action
  const dispatch=useDispatch()
  
  //component can access the state using useSelector hook
  const count=useSelector((state)=>state.counter.value)

  console.log(range);

  return (
    <div className='d-flex align-items-center justify-content-center w-100 mt-5 flex-column'>
        <h1 style={{fontSize:'90px'}}>{count}</h1>
        <div className='mt-5'>
        <button onClick={()=>dispatch(decrement(Number(range)))} className='btn bg-danger text-white rounded p-2 mt-3 ms-5'>Decrement</button>
        <button onClick={()=>dispatch(reset(Number(range)))} className='btn bg-info text-white rounded p-2 mt-3 ms-3' style={{width:"90px"}}>Reset</button>
        <button onClick={()=>dispatch(increment(Number(range)))} className='btn bg-success text-white rounded p-2 mt-3 ms-3 '>Increment</button>
        

        </div>
        <div className='mt-5 w-50'>
          <input onChange={(e)=>setRange(e.target.value)} type="text" style={{borderColor:'blue'}} className='form-control' placeholder='Enter the Range' id="" />
        </div>
    </div>
  )
}

export default Counter