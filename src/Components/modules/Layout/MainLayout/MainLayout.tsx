import ClassExample from "../../../hooks/ClassExample/ClassExample";
import FunctionalExample from "../../../hooks/FunctionalExample/FunctionalExample";
import "./MainLayout.css";
import Car from "./src/Components/modules/Layout/CarComponents/Car/Car";
import Footer from "./src/Components/modules/Layout/Footer/Footer";
import Header from "./src/Components/modules/Layout/Header/Header";
import Main from "./src/Components/modules/Layout/Main/Main";
import Menu from "./src/Components/modules/Layout/Menu/Menu";

function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
            <aside><Menu/></aside>
            <main><FunctionalExample/></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
