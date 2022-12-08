import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redox/state/todo/TodoSlice';
const TodoCreate = () => {
   const Dispatch = useDispatch();
   const taskInput = useRef();
    return (
    <div className="container-flud">
        <div className="row">
           <div className="col-10">
              <input ref={taskInput} type="text" placeholder="Task Name" class="form-control"/>
           </div>
        </div>
        <div className="col-md-2 my-3">
            <button onClick={()=>Dispatch(AddTodo(taskInput.current.value))} className="btn btn-primary">Add To Do</button>
        </div>
        
    </div>
    );
};

export default TodoCreate;