import React, { usedropD, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import { countries } from "../Components/Users/userHelper";

const RegisterUser = () => {
  const initialValue={
    email:"",
    mobile_without_code:"",
    password:"",
    countryCode:"91"
  }
  const [dropD, setdropD] = useState(false);
  const [input,setInput] = useState(initialValue)
 
  const toggle = () => {
    setdropD(!dropD);
  };


  const handleChange=(e)=>{
    console.log(e.target,"dsklsdhsd")
   let {name,value}=e.target;
   setInput((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    console.log(input,"submit")
  }

  return (
    <React.Fragment>
      <main className="main">
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      //   href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logoA1.png" alt="" />
                      <span className="d-none d-lg-block">DemoAdmin</span>
                    </a>
                  </div>
                  <Form onSubmit={(e)=>onSubmit(e)}>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                        value={input.email}
                        onChange={handleChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <Label for="exampleSelect">Phone Number</Label>
                      <InputGroup>
                        <Dropdown isOpen={dropD} toggle={toggle} >
                          <DropdownToggle caret>{input.countryCode}</DropdownToggle>
                          <DropdownMenu>
                            {countries.map((val,index) => {
                              return (
                                <DropdownItem key={index} name="countryCode" onClick={handleChange} value={val.phoneCode}>{val.phoneCode} , {val.countryName} ({val.code})</DropdownItem>
                              );
                            })}
                          </DropdownMenu>
                        </Dropdown>
                        <Input name="mobile_without_code" onChange={handleChange} value={input?.mobile_without_code} placeholder="phoneNumber" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        onChange={handleChange} 
                        value={input?.password}
                        id="examplePassword"
                        placeholder="password placeholder"
                  />
                  </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Check me out
                      </Label>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default RegisterUser;
