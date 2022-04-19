import React,{useState} from 'react';
import './Newexpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props)=>{
    const [editing,isSetEdit]=useState(false);
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        isSetEdit(false);
    }
const isEditing =()=>{
    isSetEdit(true);
}
const cancelIsEditing=()=>{
    isSetEdit(false);
}

return <div className='new-expense'>
    { !editing && <button onClick={isEditing}>Add New Expense</button> }
    { editing && <ExpenseForm 
          onSaveExpenseData={ saveExpenseDataHandler } 
        onCancel={cancelIsEditing} 
        />}
</div>
}
export default NewExpense;