import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroupAddon,
  InputGroup,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import { countries } from "../Components/Users/userHelper";
import Select from 'react-select';

const RegisterUser = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
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
                  <Form>
                    <FormGroup>
                      <Label for="exampleEmail">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Phone Number</Label>
                      <InputGroup>
                        {/* <Dropdown isOpen={state} toggle={toggle}>
                          <DropdownToggle caret>Dropdown</DropdownToggle>
                          <DropdownMenu>
                            {countries.map((val) => {
                              return (
                                <DropdownItem>{val.phoneCode}</DropdownItem>
                              );
                            })}
                          </DropdownMenu>
                        </Dropdown> */}
                        <Select
        value={"91"}
        // onChange={this.handleChange}
        options={countries.map((val) => {
            return (
              <DropdownItem>{val.phoneCode}</DropdownItem>
            );
          })}
      />
                        <Input placeholder="phoneNumber" />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label for="examplePassword">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="password placeholder"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Select</Label>
                      <Input type="select" name="select" id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelectMulti">Select Multiple</Label>
                      <Input
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                        multiple
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleText">Text Area</Label>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleFile">File</Label>
                      <Input type="file" name="file" id="exampleFile" />
                      <FormText color="muted">
                        This is some placeholder block-level help text for the
                        above input. It's a bit lighter and easily wraps to a
                        new line.
                      </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                      <legend>Radio Buttons</legend>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" /> Option one is
                          this and that—be sure to include why it's great
                        </Label>
                      </FormGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="radio" name="radio1" /> Option two can be
                          something else and selecting it will deselect option
                          one
                        </Label>
                      </FormGroup>
                      <FormGroup check disabled>
                        <Label check>
                          <Input type="radio" name="radio1" disabled /> Option
                          three is disabled
                        </Label>
                      </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> Check me out
                      </Label>
                    </FormGroup>
                    <Button>Submit</Button>
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
