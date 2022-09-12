import {useEffect, useState} from "react";
import ReactDom from "react-dom/client"

const App = ()=>{
    const [count,setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //preformence issue
    //const calculation = expensiveCalculation(count);
    const calculation = useMemo(()=>expensiveCalculation(count),[count]);
    const calculation2 = useMemo(()=>expensiveCalculation(count2),[count2]);
    const calculation3 = expensiveCalculation(count3);
    const calculation4 = expensiveCalculation(count4);

    useEffect(()=>{},[count,count2,count3,count4]);

    const increment = ()=>{
        setCount((c)=>c+1);
    }

    const addTodo = ()=>{
        setTodos((t)=>[...t,"New Todo"]);
    }

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo,index)=>{
                    return <p key={index}>{todo}</p>
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive calculation</h2>
                {calculation}
            </div>
        </div>
    )


    const expensiveCalculation = (num) => {
        console.log("Calculating ....");
        //sleep 1 sec delay.....
        for (let i=0; i<100000000; i++){
            num +=1;
        }
        return num;
    }
};