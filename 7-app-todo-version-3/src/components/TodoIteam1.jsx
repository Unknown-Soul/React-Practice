import styles from './TodoIteam1.module.css';

function TodoIteam1(props) {

  return <div className="container">
      <div className={`${styles.customRow} row`} key={props.itemName}> 
        <div className="col-6">{props.itemName}</div>
        <div className="col-4">{props.date}</div>
        <div className="col-2">
          <button type='button' className={`btn btn-danger ${styles.customButton}`}>Delete</button>
        </div>
      </div>
  </div>
}
export default TodoIteam1;