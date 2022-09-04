import { Component } from "react";
import "./SingleItemClass.css";

interface SingleItemClassProps {
	name:string;
    age:number;
}

class SingleItemClass extends Component<SingleItemClassProps> {

    public render(): JSX.Element {
        return (
            <div className="SingleItemClass">
				
            </div>
        );
    }
}

export default SingleItemClass;
