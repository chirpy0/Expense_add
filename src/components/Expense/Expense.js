import React,{useState} from 'react';
import './expense.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItems.js';
import ExpensesFilter from './ExpensesFilter';

const Expense = (props) => {
   const [filteredYear, setFilteredYear] = useState('2020');
 
   const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
   };
   const filteredExpense=props.items.filter(expense=>{
      return expense.date.getFullYear().toString() === filteredYear;
   });
   let expensesContent=<p>no expense</p>;
   if(filteredExpense.length >0)
   {
      expensesContent= filteredExpense?.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));}
 
   return (
     <div>
       <Card className='expenses'>
         <ExpensesFilter
           selected={filteredYear}
           onChangeFilter={filterChangeHandler}
         />
         {expensesContent}
       </Card>
     </div>
   );
 };
 
 
export default Expense;