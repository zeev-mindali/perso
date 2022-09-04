import { SyntheticEvent, useState } from "react";
import "./Car.css";

function Car(): JSX.Element {
    //let carNumber;
    //we are using the variable carNumber, the function will be called setCarNumber
    //useState("")=>default value of type string , empty string
    const [carNumber,setCarNumber] = useState("");

    const myValue = (args:SyntheticEvent)=>{
        let carValue = (args.target as HTMLInputElement).value;
        setCarNumber(carValue);
        //console.log(carNumber);
    };

    const searchCar = ()=>{};

    return (
        <div className="Car">
			<h1>Car Locator</h1><hr/>
            <input type="text" placeholder="Enter Car Number" onChange={myValue}/>
            <input type="button" value="Search" onClick={searchCar}/>
            <hr/><br/><br/>
            car number: <br/><h2>{carNumber}</h2>
        </div>
    );
}

export default Car;
