import TodoItem from './TodoItem'

export default function TodoList({todos, onDelete, onUpdate}) {
    if(!todos?.length){
        return (
          <div>
            <ul>No To-Dos found</ul>
          </div>
        );
      }
      return(
       <div>
        {todos.map((todo)=>(<TodoItem key={todo.id} item={todo} onDelete={onDelete} onUpdate={onUpdate}/>
        ))}
       </div>
      );
}