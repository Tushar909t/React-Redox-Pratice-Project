import Swal from 'sweetalert2';
import store from '../../redox/store/store';
import { EditTodo } from '../../redox/state/todo/TodoSlice';

export function TodoEditAlert(i,item){
Swal.fire({
  title: 'Update Task Name',
  input: 'text',
  inputValue:item,
  inputValidator:(value)=>{
    if(value){
        store.dispatch(EditTodo({index:i,task:value}));
    }
  }
  

})
}