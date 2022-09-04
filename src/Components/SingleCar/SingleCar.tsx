import CarData from "./CarData";
import "./SingleCar.css";

interface SingleCarProps {
    myData:CarData;
    isHandiCap:boolean;
}

function SingleCar(props: SingleCarProps): JSX.Element {
    return (
        <div className="SingleCar Box">
            <h1>{props.myData.mispar_rechev}</h1><hr/>
            {props.myData.tozeret_nm}<br/>
            {props.myData.kinuy_mishari}<br/>
            {props.myData.tokef_dt}<br/>
            {props.myData.tzeva_rechev}<br/>
            {props.myData.shnat_yitzur}<br/>
            {props.isHandiCap?"רכב נכים":"1000 שקל קנס"}
        </div>
    );
}

export default SingleCar;
