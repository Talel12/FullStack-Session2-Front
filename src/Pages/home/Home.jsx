import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/counterSlice/counterSlice'

const Home = () => {
    const count = useSelector((store)=> store.counter.value)
    const dispatch = useDispatch()
    const amountRef= useRef()
  return (
    <div>
        <h1>Home Page</h1>
        <button onClick={()=> dispatch(increment())}>+</button>
        <h1>{count}</h1>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <input type="number" ref={amountRef}/>
        <button onClick={()=> dispatch(incrementByAmount(amountRef.current.value))}>Update Counter</button>
    </div>
  )
}

export default Home