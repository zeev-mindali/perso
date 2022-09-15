import ClassExample from "../../../hooks/ClassExample/ClassExample";
import FunctionalExample from "../../../hooks/FunctionalExample/FunctionalExample";
import "./MainLayout.css";
import Car from "./src/Components/modules/Layout/CarComponents/Car/Car";
import Footer from "./src/Components/modules/Layout/Footer/Footer";
import Header from "./src/Components/modules/Layout/Header/Header";
import Main from "./src/Components/modules/Layout/Main/Main";
import Menu from "./src/Components/modules/Layout/Menu/Menu";
import LoginForm from "../../../../LoginForm"
function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
            <aside><Menu/></aside>
            <main><LoginForm shouldRemember={false} onUsernameChange={function (username: string): void {
                throw new Error("Function not implemented.");
            } } onPasswordChange={function (password: string): void {
                throw new Error("Function not implemented.");
            } } onRememberChange={function (remember: boolean): void {
                throw new Error("Function not implemented.");
            } } onSubmit={function (username: string, password: string): void {
                throw new Error("Function not implemented.");
            } }/></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
