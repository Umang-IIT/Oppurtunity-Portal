import React, { useState } from "react";
import { Accordion, Card, Col, Row, useAccordionButton } from "react-bootstrap";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, MenuItem, Select, InputLabel } from "@mui/material";
import './edu.css';
import Button from "@restart/ui/esm/Button";
import validator from 'validator';
function CustomToggle({ children, eventKey }) {
    const [name, setName] = useState("+");
    const decoratedOnClick = useAccordionButton(eventKey, () => {
        if (name === "+") { setName("-") }
        else { setName("+") }
    },
    );

    return (
        <p

            className="btn add-btn accordheader"
            onClick={decoratedOnClick}
        >
            {name} {children}
        </p>
    );
}

function EmailValid ({email}){
    const [emailError, setEmailError] = useState('');
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter valid Email!')
      }
}
}

const Personal = () => {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }} >Personal Details</h1>
            <div className="container1">
                <Accordion className="widthAcc">
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="0" children="Add Details" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>

                                    <Col xs={12} sm={3}>
                                        <FormControl className="my-2 w-100">
                                            <InputLabel id="title">Title</InputLabel>
                                            <Select
                                                labelId="title"
                                                id="title"
                                                label="title"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="mr">Mr.</MenuItem>
                                                <MenuItem value="ms">Ms.</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    
                                    <Col xs={12} sm={5}>
                                        <TextField id="outlined-basic" label="First Name" variant="outlined" name="firstname" className="my-2 w-100" /> </Col>
                                    <Col xs={12} sm={4}>
                                        <TextField id="outlined-basic" label="Last Name" variant="outlined" name="lastname" className="my-2 w-100" />    </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" type = "date" label="Date Of Birth" variant="outlined" name="dob" className="my-2 w-100" 
                                        InputLabelProps={
                                            {shrink:true,}
                                        }
                                        /> </Col>
                                </Row>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="1" children="Add Contact Details" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>
                                <Col xs={12} sm={12}>
                                        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" className="my-2 w-100" 
                                        /> </Col>
                                </Row>
                                <Row>
                                    <Col xs={0} sm={3}>
                                        <TextField id="outlined-basic" label="Code" variant="outlined" name="mcode" defaultValue="+91" className="my-2 w-100" 
                                        InputLabelProps={
                                            {shrink:true,}
                                        }
                                        /> </Col>
                                    <Col xs={12} sm={9}>
                                        <TextField id="outlined-basic" label="Mobile" variant="outlined" name="mobile" className="my-2 w-100" />    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="2" children="Add Course Details" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Roll No." variant="outlined" name="rollno" className="my-2 w-100" /> </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Department" variant="outlined" name="dept" className="my-2 w-100" />    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <FormControl className="my-2 w-100">
                                            <InputLabel id="stutype">Student Type</InputLabel>
                                            <Select
                                                labelId="stutype"
                                                id="stutype"
                                                label="stutype"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="mr">B.Tech</MenuItem>
                                                <MenuItem value="ms">M.Tech</MenuItem>
                                                <MenuItem value="ms">BSc (4 Year)</MenuItem>
                                                <MenuItem value="ms">MSc (5 Year)</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Passport No." variant="outlined" name="passno" className="my-2 w-100" /> 
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={12}>
                                        <TextField id="outlined-basic" label="Course" variant="outlined" name="course" className="my-2 w-100" /> 
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="3" children="Add City Prefences" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                <Row>
                                    <Col xs={12} sm={12}>
                                        <TextField id="outlined-basic" label="City" variant="outlined" name="city" className="my-1 w-100" /> 
                                    </Col>
                                    <br />
                                    <span style={{
                                      fontWeight: 'light',
                                      color: 'grey',
                                    }}> Please enter the city where you currently live</span>
                                </Row>
                                <br />
                                <Row>
                                    <Col xs={12} sm={12}>
                                        <TextField id="outlined-basic" label="2nd City" variant="outlined" name="seccity" className="my-1 w-100" /> 
                                    </Col>
                                    <br />
                                    <span style={{
                                      fontWeight: 'light',
                                      color: 'grey',
                                    }}>If you study in one city (say Kharagpur) but are from a different city (say Chennai), fill this to be consider for oppourtunities in both </span>
                                </Row>
                                
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                   

            </div>
            
        </div>

    );
}

export default Personal;

