import styles from './TodoIteam1.module.css';
import { MdDelete } from "react-icons/md";
function TodoIteam1(props) {

  return <div className="container">
    <div className={`${styles.customRow} row`} key={props.itemName}>
      <div className="col-6">{props.itemName}</div>
      <div className="col-4">{props.date}</div>
      <div className="col-2">
        <button type='button' className={`btn btn-danger ${styles.customButton}`} onClick={() => props.onDeleteTodoIteam(props.itemName)}><MdDelete /></button>
      </div>
    </div>
  </div>
}
export default TodoIteam1;