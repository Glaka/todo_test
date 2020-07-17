import React from 'react';

export const ToDoItem = ({ params }) => {
    const changeChecked = (params) => {};

    return (
        <div>
            <input
                type="checkbox"
                checked={params.isDone}
                onChange={() => changeChecked()}
            ></input>
            <span>{params.text}</span>
            <span>
                {'    -'}
                {params.label}
            </span>
        </div>
    );
};
