import Swal from 'sweetalert2';
import store from '../../redox/store/store'
import { RemoveTodo } from '../../redox/state/todo/TodoSlice';
export function TodoDeleteAlert(i){
 Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    store.dispatch(RemoveTodo(i))
  }
})

}