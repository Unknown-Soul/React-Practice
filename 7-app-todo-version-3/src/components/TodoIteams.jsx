import TodoIteam1 from "./TodoIteam1";

const TodoIteams = ({ todo }) => {
    return (
        <>
            {todo.map((item, index) => (
                <TodoIteam1
                    key={index} 
                    itemName={item.itemName}
                    date={item.date}
                />
            ))}
        </>
    );
};

export default TodoIteams;
