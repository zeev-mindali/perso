import SingleItem from "../MainComponents/SingleItem/SingleItem";
import "./Main.css";

function Main(): JSX.Element {
    const students = [
        {id:1, name:"Zeev",age:48},
        {id:2, name:"Amital",age:46},
        {id:3, name:"Hilda",age:666},
        {id:4, name:"Sasson",age:72},
    ]
    
    const todoList = [
        "Clean the house", "buy stuff for shabat", "setup the table","clean the house"
    ]
    return (
        <div className="Main">
			My Main<hr/>
            {/*
            <div className="Box">
                {students[0].name}<br/>
                <h2>{students[0].age}</h2>
            </div>
            */}
            {/*students.map(item=><div className="Box">{item.name}<br/><h2>{item.age}</h2></div>)*/}
            {/* using the component to pass data from father to son...*/}
            {students.map(item=><SingleItem key={item.age} name={item.name} age={item.age} />)}
            <br/><br/>
            {/* using mapping for display an collection*/}
            {todoList.map(item=><div className="Box">{item}</div>)}
        </div>
    );
}

export default Main;
