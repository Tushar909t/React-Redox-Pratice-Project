import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/counter/CounterSlice';
import todoReducer from '../state/todo/TodoSlice';

export default configureStore({

    reducer:{
        counter:counterReducer,
        todo:todoReducer
    }

})