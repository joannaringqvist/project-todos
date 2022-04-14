import React from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const LabelTodoCompleted = styled.label `
font-size: 1rem;
`

const CheckboxTodoCompleted = styled.input `
border: 2px solid #000;
background-color: pink;
cursor: pointer;
`

const TodoCompleted = ({ todo }) => {

    const dispatch = useDispatch();
    
    const toggleCompleted = (todoId) => {
        dispatch(todos.actions.markAsCompleted(todoId));
        console.log(todoId);
    }

   

    return (
        <div>
            <LabelTodoCompleted htmlFor={todo.id}>
                Completed?
            </LabelTodoCompleted>
            <CheckboxTodoCompleted 
                type="checkbox" 
                id={todo.id}
                checked={todo.isCompleted} 
                onChange={() => toggleCompleted(todo.id)}
            />
        </div>
    );
}

export default TodoCompleted;