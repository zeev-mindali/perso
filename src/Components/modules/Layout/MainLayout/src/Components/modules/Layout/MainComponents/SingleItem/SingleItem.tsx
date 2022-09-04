import "./SingleItem.css";

//what arguments we want to pass to this component
interface SingleItemProps {
	name:string;
    age:number;
}
const isZeev:boolean=true;

const yesWeCan = (name:string)=>{
    if (name==="Amital"){
        return "the best that an husband can get";
    } else {
        return "why who r u?";
    }
}

//component that uses our interface for specifying data structure
function SingleItem(props: SingleItemProps): JSX.Element {
    return (
        <div className="SingleItem Box2">
            {/* using the specific props*/}
			{props.name}<br/>
            <h2>{props.age}</h2>
            {/*props.name==="Amital" && <h3>the best that an husband can get</h3>*/}
            <h3>{yesWeCan(props.name)}</h3><br/>
        </div>
    );
}

export default SingleItem;
