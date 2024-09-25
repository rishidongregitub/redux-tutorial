import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    const [amount,setAmount] = useState(0);
    const handleIncrementByAmount = () => {
        const numericAmount = Number(amount); // Convert to a number
        if (!isNaN(numericAmount)) {          // Check if the input is valid
            dispatch(incrementByAmount(numericAmount));  // Dispatch the action, not the function
        }
    };
    


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

            </div>
        </div>
    )
}

export default Counter