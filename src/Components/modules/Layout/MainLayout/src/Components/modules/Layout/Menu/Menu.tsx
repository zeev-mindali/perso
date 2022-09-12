import { store } from "../../../../../../../../../redux/store";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			Main Menu<br/>
            {store.getState().authState.userName}
            {/* store.subscribe */}
            <hr/>
            locate car<br/>
            locate bike<br/>
            locate truck<br/>
            handicap car<br/>
            offroad car<br/>
            recalls<br/>
        </div>
    );
}

export default Menu;
