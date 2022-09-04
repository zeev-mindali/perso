import { SyntheticEvent, useEffect, useState } from "react";
import "./Car.css";
import axios from "axios";
import SingleCar from "../../../../../../../../../SingleCar/SingleCar";
import CarData from "../../../../../../../../../SingleCar/CarData";
import jwtAxios from "../../../../../../../../../myAxios/jwtAxios";
function Car(): JSX.Element {
    //endpoint url to transportation ministry
    const myURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q="
    const HandiCapURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=c8b9f9c8-4612-4068-934f-d4acd2e3c06e&q=";
    //let carNumber;
    //we are using the variable carNumber, the function will be called setCarNumber
    //useState("")=>default value of type string , empty string
    const [carNumber,setCarNumber] = useState("");
    const [carData,setCarData] = useState(new CarData("","","","",0,""));
    const [carHandi, setHandi] = useState(false);
    const myValue = (args:SyntheticEvent)=>{
        let carValue = (args.target as HTMLInputElement).value;
        setCarNumber(carValue);
        //console.log(carNumber);
    };

    useEffect(()=>{
        //getCar_v2();
        sendOurAxios();
    },[]);

    //v1  --async await
    const getCar_v1 = async ()=>{
        const result = await axios.get(myURL+"1113334");
        console.log (result);
    }

    //v2
    const getCar_v2 = ()=>{
        axios.get(myURL+"1113334")
        .then (response=>console.log(response))
        .then (()=>{console.log("data received")})
    }

    const getCarData = ()=>{
        axios.get(myURL+carNumber)
        .then (response=>{
            //console.log(response.data.result.records[0]);
            const carInfo = response.data.result.records[0];
            const recvData = new CarData(carInfo.mispar_rechev,carInfo.kinuy_mishari,carInfo.tozeret_nm,carInfo.tzeva_rechev,carInfo.shnat_yitzur,carInfo.tokef_dt);
            setCarData(recvData);
            //console.log("we have car data");
        })
    }

    const getCarHandiCapData = ()=>{
        axios.get(HandiCapURL+carNumber)
            .then((response)=>{
                
                console.log(response.data.result.records[0]["SUG TAV"]);
                const tav:number=response.data.result.records[0]["SUG TAV"];
                //1-permanent 2-temp    
                setHandi(response.data.result.records.length>0);
            });
    }

    const sendOurAxios = ()=>{
        jwtAxios.get(myURL+"1113334")
        .then ((response)=>{
            console.log("response from jwtAxios");
            console.log(response);
        });
    }


    const searchCar = ()=>{
      console.log("getting car data");
      getCarData();
      console.log("get car handicap");
      getCarHandiCapData();  
    };

    return (
        <div className="Car">
			<h1>Car Locator</h1><hr/>
            <input type="text" placeholder="Enter Car Number" onChange={myValue}/>
            <input type="button" value="Search" onClick={searchCar}/>
            <hr/><br/><br/>
            {/*car number: <br/><h2>{carNumber}</h2>*/}
            <SingleCar myData={carData} isHandiCap={carHandi} />
        </div>
    );
}

export default Car;
