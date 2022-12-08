import React from 'react';
import TodoCreate from '../components/todo/TodoCreate';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
    return (
    <div className='container my-5'>
    <div className='row'>
        <div className='col-12'>
        <div className="card">
            <div className="card-header">
                <h4>My Todo App</h4>
            </div>
            <div className="card-body">
                <TodoCreate/>
                <TodoList/>
            </div>
        </div>
        </div>

    </div>
            
    </div>
    );
};

export default TodoPage;