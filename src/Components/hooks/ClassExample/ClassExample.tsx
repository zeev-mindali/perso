import { Component } from "react";
import "./ClassExample.css";

interface ClassExampleProps {
	
}

interface ClassExampleState {
	count:number;
    personName:string;
}

class ClassExample extends Component<ClassExampleProps, ClassExampleState> {

    public constructor(props: ClassExampleProps) {
        super(props);
        this.state = {
			count:0,
            personName:"zeev",
        };
    }

    public render(): JSX.Element {
        return (
            <div className="ClassExample">
                <p>Class example</p>
				<p> you click {this.state.count} times</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}/> click me
            </div>
        );
    }

    //hooks - react will decide when to fire this method
    //useEffect
    componentDidMount(){
        document.title = `you clicked ${this.state.count} times`
    }

    componentDidUpdate(){
        document.title = `you clicked ${this.state.count} times`
    }
}

export default ClassExample;
