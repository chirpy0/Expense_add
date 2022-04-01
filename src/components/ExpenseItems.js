// import React,{useState}  from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItems.css';
import Card from './Card';
// import react from 'react';
function ExpenseItem(props) {
  // const [title,newTitle]=useState(props.title);
  // function titleHandler(){
  //   newTitle('updated');
  //   console.log(title);
  // }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* <button onClick={titleHandler}>click</button> */}
    </Card>
  );
}

export default ExpenseItem;