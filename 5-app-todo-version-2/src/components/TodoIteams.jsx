import TodoIteam1 from "./TodoIteam1";
const TodoIteams = ({ todo }) => {
    return <>
        {todo.map(item => <TodoIteam1 itemName={item.itemName} date={item.date} />)}
    </>
}

export default TodoIteams;