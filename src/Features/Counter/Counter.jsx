import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount,resetAmount } from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [amount,setAmount] = useState('');
    const handleIncrementByAmount = () => {
        const numericAmount = Number(amount); // Convert to a number
        if (!isNaN(numericAmount)) {          // Check if the input is valid
            dispatch(incrementByAmount(numericAmount));  // Dispatch the action, not the function
        }
    };
    const handleResetAmount =()=>{
        dispatch(resetAmount())
    }


    return (
        <div>
            <div>
                <button aria-label='Increment Value' onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button aria-label='Decrement Value' onClick={() => dispatch(decrement())}>decrement</button>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />

                <button onClick={handleIncrementByAmount}>Increment by Amount</button>
                <button onClick={handleResetAmount}>Reset Amount</button>

            </div>
        </div>
    )
}

export default Counter