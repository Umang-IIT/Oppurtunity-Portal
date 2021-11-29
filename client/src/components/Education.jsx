import React, { useState } from "react";
import { Accordion, Card, Col, Row, useAccordionButton } from "react-bootstrap";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, MenuItem, Select, InputLabel } from "@mui/material";
import './edu.css';
import Button from "@restart/ui/esm/Button";

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

const Education = () => {
    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }} >Education</h1>
            <div className="container1">
                <Accordion className="widthAcc">
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="0" children="Add Graduation" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Row>

                                    <Col xs={12} sm={6}>
                                        <FormControl className=" w-100">
                                            <InputLabel id="startYear">Start Year</InputLabel>
                                            <Select
                                                labelId="startYear"
                                                id="startYear"
                                                // value={age}
                                                label="startyear"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="2019">2019</MenuItem>
                                                <MenuItem value="2020">2020</MenuItem>
                                                <MenuItem value="2021">2021</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <FormControl className=" w-100 ">
                                            <InputLabel id="endYear">End Year</InputLabel>
                                            <Select
                                                labelId="endYear"
                                                id="endYear"
                                                // value={age}
                                                label="endyear"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="2022">2022</MenuItem>
                                                <MenuItem value="2023">2023</MenuItem>
                                                <MenuItem value="2024">2024</MenuItem>
                                                <MenuItem value="2025">2025</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Degree" variant="outlined" name="degree" className="my-2 w-100" /> </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Stream" variant="outlined" name="stream" className="my-2 w-100" />    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={6}  >
                                        <TextField type="number" id="outlined-basic" label="Performance (CGPA)" variant="outlined" name="performance" className="my-2 w-100 " />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="1" children="Add Senior Secondary (XII)" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Row>

                                    <Col xs={12} sm={12}>
                                        <FormControl className=" w-100 my-2">
                                            <InputLabel id="YOC">Year of Completion</InputLabel>
                                            <Select
                                                labelId="YOC"
                                                id="YOC"
                                                // value={age}
                                                label="Year of Completion"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="2018">2018</MenuItem>
                                                <MenuItem value="2019">2019</MenuItem>
                                                <MenuItem value="2020">2020</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Board" variant="outlined" name="board" className="my-2 w-100" /> </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="School" variant="outlined" name="school" className="my-2 w-100" />    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={6}>
                                        <FormControl className=" w-100 my-2">
                                            <InputLabel id="scale">Performance Scale</InputLabel>
                                            <Select
                                                labelId="scale"
                                                id="scale"
                                                defaultValue="CGPA"
                                                // value={age}
                                                label="Performance Scale"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="Percentage">Percentage</MenuItem>
                                                <MenuItem value="CGPA">CGPA</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    <Col xs={12} sm={6}  >

                                        <TextField type="number" id="outlined-basic" label="Performance" variant="outlined" name="performance" className="my-2 w-100 " />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <CustomToggle eventKey="2" children="Add Secondary (X)" className="fw-bold"></CustomToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <Row>

                                    <Col xs={12} sm={12}>
                                        <FormControl className=" w-100 my-2">
                                            <InputLabel id="YOC">Year of Completion</InputLabel>
                                            <Select
                                                labelId="YOC"
                                                id="YOC"
                                                // value={age}
                                                label="Year of Completion"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="2016">2016</MenuItem>
                                                <MenuItem value="2017">2017</MenuItem>
                                                <MenuItem value="2018">2018</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                </Row>
                                <Row>

                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="Board" variant="outlined" name="board" className="my-2 w-100" /> </Col>
                                    <Col xs={12} sm={6}>
                                        <TextField id="outlined-basic" label="School" variant="outlined" name="school" className="my-2 w-100" />    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col xs={12} sm={6}>
                                        <FormControl className=" w-100 my-2">
                                            <InputLabel id="scale">Performance Scale</InputLabel>
                                            <Select
                                                labelId="scale"
                                                id="scale"
                                                defaultValue="CGPA"
                                                // value={age}
                                                label="Performance Scale"
                                            // onChange={handleChange}
                                            >
                                                <MenuItem value="Percentage">Percentage</MenuItem>
                                                <MenuItem value="CGPA">CGPA</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Col>
                                    <Col xs={12} sm={6}  >
                                        <TextField type="number" id="outlined-basic" label="Performance" variant="outlined" name="performance" className="my-2 w-100 " />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <div className="ms-auto mt-2 margin text-end me-3"> 
                 <Button variant="outlined"  className= " btn btn-primary ">Next</Button>
                </div>
                   

            </div>
            
        </div>

    );
}

export default Education;

