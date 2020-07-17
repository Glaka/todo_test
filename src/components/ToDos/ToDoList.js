import React from 'react';
import { ToDoItem } from './ToDoItem';
import { useSelector } from 'react-redux';

export const ToDoList = (params) => {
    const todoList = useSelector((state) => state.todos);

    return (
        <>
            {todoList.length > 0 &&
                todoList.map((toDoitem) => (
                    <ToDoItem key="text" params={toDoitem} />
                ))}
        </>
    );
};
