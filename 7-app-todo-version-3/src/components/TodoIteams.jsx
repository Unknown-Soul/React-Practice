import TodoIteam1 from "./TodoIteam1";

const TodoIteams = ({ todo , onDeleteTodoIteam}) => {
    return (
        <>
            {todo.map((item, index) => (
                <TodoIteam1
                    key={index} 
                    itemName={item.itemName}
                    onDeleteTodoIteam = {onDeleteTodoIteam}
                    date={item.date}
                />
            ))}
        </>
    );
};

export default TodoIteams;
