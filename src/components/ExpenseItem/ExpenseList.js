import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }

    return (
        <ul className='expenses-list'>
            {
                props.items.map((expen) => (
                    <ExpenseItem
                      key={expen.id}
                      title={expen.title}
                      amount={expen.amount}
                      date={expen.date}
                    />
                  ))
            }
        </ul>
    );
};

export default ExpenseList;