import {useContext} from "react"
import { ReactDOM } from "react-dom/client" 

const myHeader = ()=>{
    const user = useContext(UserContext);
    <h1>{'Hello user ${users}'}</h1>
}