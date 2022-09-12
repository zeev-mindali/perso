import { SyntheticEvent, useState } from "react";
import { AuthState, userLogin } from "../../../../../../../../../redux/authState";
import { store } from "../../../../../../../../../redux/store";
import "./Header.css";

function Header(): JSX.Element {
    const [userName,setUser] = useState("");

    const userChanged = (uName:SyntheticEvent)=>{
        const userNameWeb = (uName.target as HTMLInputElement).value
        setUser(userNameWeb)
    }

    const makeLogin = ()=>{
        const myData = new AuthState();
        myData.userName = userName;
        myData.userType = "guest";
        myData.userToken = "";
        store.dispatch(userLogin(myData));
    }

    return (
        <div className="Header">
			<h1>Car Locater</h1>
            <br/>
            <input type="text" placeholder="userName" onChange={(target)=>userChanged(target)} id="uName"/>
            <input type="button" value="Login" onClick={makeLogin}/>
        </div>
    );
}

export default Header;
