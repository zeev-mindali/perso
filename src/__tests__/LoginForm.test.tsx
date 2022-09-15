import React from "react";
import {render,fireEvent} from "@testing-library/react";

import LoginForm, {Props} from "../LoginForm"

describe("<LoginForm/>",()=>{
    test("should display a blank login form , with remember me checked by default", async()=>{
       const {findByTestId} = renderLoginForm();
       const loginForm = await findByTestId("login-form");  

       expect(loginForm).toHaveFormValues({
        userName: "",
        password:"",
        remember:true
       });
    });

    test("should allow entering a username", async()=>{
        const onUsernameChange = jest.fn();
        const {findByTestId} = renderLoginForm({onUsernameChange});
        const username = await findByTestId("username");

        fireEvent.change(username, {target: {value: "test"}});
        expect(onUsernameChange).toHaveBeenCalledWith("test");
    });

    test("should allow entering a password", async()=>{
        const onPasswordChange = jest.fn();
        const {findByTestId} = renderLoginForm({onPasswordChange});
        const password = await findByTestId("password");

        fireEvent.change(password, {target: {value: "password"}});

        expect(onPasswordChange).toHaveBeenCalledWith("password");
    });

    test("password should be more then two chars",async()=>{
        const {findByTestId} = renderLoginForm();

        const password = await findByTestId("password");
        const length = (password as HTMLInputElement).value.length;

        expect(length).toBeGreaterThan(2);
        
    });


    test("should allow toggling remember me", async()=>{
        const onRememberChange = jest.fn();
        const {findByTestId} = renderLoginForm({
            onRememberChange,
            shouldRemember:false
        });

        const remember = await findByTestId("remember");

        fireEvent.click(remember);

        expect(onRememberChange).toHaveBeenCalledWith(true);

        fireEvent.click(remember);

        expect(onRememberChange).toHaveBeenCalledWith(false);

    })


    test("going to check a submit {userName,userPassword, remember}",async()=>{
        const onSubmit = jest.fn();
        const {findByTestId} = renderLoginForm({
            onSubmit,
            shouldRemember:false
        });

        //pointers
        const username = await findByTestId("username");
        const password = await findByTestId("password");
        const remember = await findByTestId("remember");
        const submit = await findByTestId("submit");

        //fire events, mimic user entering a from.
        fireEvent.change(username, {target:{valie: "admin"}});
        fireEvent.change(password,{target:{value:"123456"}});
        fireEvent.click(remember);
        fireEvent.click(submit);

        //check that the values we entered are working properly
        expect(onSubmit).toBeCalledWith("test","123456",true);

    });

})





function renderLoginForm(props: Partial<Props> = {}){
    const defaultProps:Props = {
        onPasswordChange(){
            return;
        },
        onRememberChange(){
            return;
        },
        onUsernameChange(){
            return;
        },
       onSubmit() {
        return;
       },
       shouldRemember:true

    };
    return render(<LoginForm {...defaultProps}{...props}/>);
}