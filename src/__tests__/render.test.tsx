import React from "react";
import {render,screen} from "@testing-library/react";
import LoginForm from "../LoginForm";
import Heading from "../Heading";

test ("test login form have correct header",()=>{
    render (<Heading/>);
    const text = screen.getByText("Login Form");
    expect(text).toBeInTheDocument();
})

test ("test alt text in img",()=>{
    render (<Heading/>);
    const myImage = screen.getAllByAltText("image for button");
    expect(myImage).toBeInTheDocument();
})