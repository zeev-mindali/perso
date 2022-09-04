import { useEffect, useState } from "react";
import "./FunctionalExample.css";

interface FunctionalExampleProps {
	
}

function FunctionalExample(props: FunctionalExampleProps): JSX.Element {
    const [count,setCount] = useState(0);
    const [personName,setPerson] = useState("zeev");
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
        document.title = (`you clicked ${count} times`);
        console.log("you pressed me");
    },[count]);

    return (
        <div className="FunctionalExample">
            <p>Function Example</p>
			<p> you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}/>Click me
            <hr/>
            <p> you clicked count2 {count2} times</p>
            <button onClick={()=>setCount2(count2+1)}/>Click me
        </div>
    );
}

export default FunctionalExample;
