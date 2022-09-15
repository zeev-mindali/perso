import React from "react";

export interface Props{
    shouldRemember:boolean;
    onUsernameChange: (username:string)=>void;
    onPasswordChange: (password:string)=>void;
    onRememberChange: (remember:boolean)=>void;
    onSubmit: (username:string, password:string)=>void;
}

function LoginForm(props:Props) {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [remember, setRemember] = React.useState(props.shouldRemember);

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setUserName(value);
        props.onUsernameChange(value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setPassword(value);
        props.onPasswordChange(value);
    }

    const handleRemeberChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const {checked} = e.target;
        setRemember(checked);
        props.onRememberChange(checked);
    }

    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();
        props.onSubmit(userName,password);
    }

    //useForm => https://react-hook-form.com/api/useform/

    return (
        <div className="Box">
        <h1>my login</h1><hr/>
        <form data-testid="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input 
            data-testid="username"
            type="text"
            name="username"
            value={userName}
            onChange={handleUsernameChange}
            />
            <br/><br/>
            <label htmlFor="password">Password:</label>
            <input 
                data-testid="password"
                type="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <br/><br/>
            <label>
                <input 
                    data-testid="remember"
                    name="remember"
                    type="checkbox"
                    checked={remember}
                    onChange={handleRemeberChange}
                />
                Remember me?
            </label>
        </form>
        </div>
    )
}

export default LoginForm;