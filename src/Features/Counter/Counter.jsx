import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, resetAmount, incrementByAmountAsync } from './counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');
    const [loadingIncrement, setLoadingIncrement] = useState(false); // Loading state for increment
    const [loadingReset, setLoadingReset] = useState(false); // Loading state for reset

    const handleIncrementByAmount = () => {
        const numericAmount = Number(amount);
        if (!isNaN(numericAmount) && numericAmount > 0) {
            setLoadingIncrement(true); // Start loading for increment
            dispatch(incrementByAmountAsync(numericAmount)).then(() => {
                setLoadingIncrement(false); // Stop loading after action completes
            });
            setAmount(''); // Reset input after dispatch
        } else {
            alert("Please enter a valid positive number");
        }
    };

    const handleResetAmount = () => {
        const confirmed = window.confirm("Are you sure you want to reset the counter?");
        if (confirmed) {
            setLoadingReset(true); // Start loading for reset
            setTimeout(() => {
                dispatch(resetAmount());
                setLoadingReset(false); // Stop loading after reset
            }, 1000); // 1-second delay
        }
    };

    return (
        <div>
            <div>
                <button aria-label='Increment Value' onClick={() => dispatch(increment())}>Increment</button>
                <span>{count}</span>
                <button aria-label='Decrement Value' onClick={() => dispatch(decrement())}>Decrement</button>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                />
                <button onClick={handleIncrementByAmount} disabled={loadingIncrement}>
                    {loadingIncrement ? 'Loading...' : 'Increment by Amount'}
                </button>
                <button onClick={handleResetAmount} disabled={loadingReset}>
                    {loadingReset ? 'Loading...' : 'Reset Amount'}
                </button>
            </div>
        </div>
    );
};

export default Counter;
