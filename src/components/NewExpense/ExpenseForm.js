
import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate]= useState('');
    const titleChangehandler=(event)=>{
        setEnteredTitle(event.target.title)
    }
    const amountChangehandler=(event)=>{
        setEnteredAmount(event.target.title)
    }
    const dateChangehandler=(event)=>{
        setEnteredDate(event.target.title)
    }
return <form>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={ titleChangehandler } />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={ amountChangehandler } />
        </div>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='date' onChange={ dateChangehandler }/>
        </div>
    </div>
    <div className='new-expense__actions'>
            <button type='submit'>Submit</button>
        </div>
    </form>
}
export default ExpenseForm;