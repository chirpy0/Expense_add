
import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=()=>{
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate]= useState('');
    // const [userInput,setUserInput]= useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });
    const titleChangehandler=(event)=>{
        setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value,
        // });
        //this is better approach because it keeps updates snapshot
        // setUserInput((previnput)=>{
        //     return {...userInput,enteredTitle:event.target.value}        
        // });
    }
    const amountChangehandler=(event)=>{
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value,
        // });
    }
    const dateChangehandler=(event)=>{
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value,
        // });
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date(enteredDate),
        }
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={ enteredTitle } onChange={ titleChangehandler } />
        </div>
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' value={ enteredAmount } onChange={ amountChangehandler } />
        </div>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='date' value={ enteredDate } onChange={ dateChangehandler }/>
        </div>
    </div>
    <div className='new-expense__actions'>
            <button type='submit'>Submit</button>
        </div>
    </form>
}
export default ExpenseForm;