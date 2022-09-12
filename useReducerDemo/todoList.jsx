import { useReducer }  from "react";
import ReactDom from "react-dom/client"


const todos = ()=>{
    const [todos,dispatch] = useReducer(todoReducer, intialTodos); //not render
    const [myTodos, setTodo] = useState(intialTodos); //render

    // const handleStateComplete = (item,action)=>{
    //     switch(action){
    //         case "delete":

    //         break;
    //     }
    // };
    
    const handleComplete = (todo)=>{dispatch({type: "COMPLETE", id: todo.id});};

    const handleDelete = (todo)=>{dispatch({type: "DELETE", id: todo.id});};

    return (
        <>
          {todos.map((todo)=>(
            <div key={todo.id}> 
                <label>
                    <input 
                        type="checkbox"
                        checked={todo.complete}
                        onChange={()=>handleComplete(todo)}
                    />
                    {todo.title}
                    <input type="button" value="delete" onClick={
                        handleDelete(todo)
                        //handleStateComplete(todo).bind("delete)")
                        }/>
                </label>
            </div>
          ))}  
        </>
    )

}