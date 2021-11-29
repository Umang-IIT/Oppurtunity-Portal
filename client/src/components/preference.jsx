import React from "react";
import {Col, Row} from "react-bootstrap";
import {FormControl, MenuItem, Select, InputLabel} from "@mui/material";
import './edu.css';
import Button from "@restart/ui/esm/Button";

const Education = () => {
    return (
        <div className="container">
            <h2 style={{
                    textAlign: "center"
                }}>Preferences</h2>
            <div className="container1">
                {/* <Row>

                    <h6>What are you currently looking for?</h6>
                    <Col xs={12} sm={6}>
                        <Select className=" w-100" labelId="type" id="type" label="type">
                            <MenuItem value="ins">Internships</MenuItem>
                            <MenuItem value="frj">Fresher Jobs</MenuItem>
                        </Select>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row> */
                }
                <Row>
                    <h6>Which of the following work type(s) are you looking for?</h6>
                    <Col xs={12} sm={6}>
                        <Select className=" w-100" labelId="place" id="place" label="place">
                            <MenuItem value="off">In-office</MenuItem>
                            <MenuItem value="wfh">Work from home</MenuItem>
                        </Select>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Which fields are you willing to work in?</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormControl className=" w-100 my-2">
                            <InputLabel id="fp">First Preference</InputLabel>
                            <Select className=" w-100" labelId="fp" id="fp" label="fp">
                                <MenuItem value="ae">Aerospace Engineering</MenuItem>
                                <MenuItem value="bt">Biotechnology Engineering</MenuItem>
                                <MenuItem value="cs">Computer Science Engineering</MenuItem>
                                <MenuItem value="ee">Electrical Engineering</MenuItem>
                                <MenuItem value="me">Mechanical Engineering</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormControl className=" w-100 my-2">
                            <InputLabel id="sp">Second Preference</InputLabel>
                            <Select className=" w-100" labelId="sp" id="sp" label="sp">
                                <MenuItem value="ae">Aerospace Engineering</MenuItem>
                                <MenuItem value="bt">Biotechnology Engineering</MenuItem>
                                <MenuItem value="cs">Computer Science Engineering</MenuItem>
                                <MenuItem value="ee">Electrical Engineering</MenuItem>
                                <MenuItem value="me">Mechanical Engineering</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormControl className=" w-100 my-2">
                            <InputLabel id="tp">Third Preference</InputLabel>
                            <Select className=" w-100" labelId="tp" id="tp" label="tp">
                                <MenuItem value="ae">Aerospace Engineering</MenuItem>
                                <MenuItem value="bt">Biotechnology Engineering</MenuItem>
                                <MenuItem value="cs">Computer Science Engineering</MenuItem>
                                <MenuItem value="ee">Electrical Engineering</MenuItem>
                                <MenuItem value="me">Mechanical Engineering</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br></br>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6>Which cities would you like to work in? (in-office only)</h6>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormControl className=" w-100 my-2">
                            <InputLabel id="fpp">First Preference</InputLabel>
                            <Select className=" w-100" labelId="fpp" id="fpp" label="fpp">
                                <MenuItem value="de">Delhi</MenuItem>
                                <MenuItem value="ko">Kolkata</MenuItem>
                                <MenuItem value="ch">Chennai</MenuItem>
                                <MenuItem value="mb">Mumbai</MenuItem>
                                <MenuItem value="bp">Bhopal</MenuItem>
                            </Select>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1></h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormControl className=" w-100 my-2">
                            <InputLabel id="spp">Second Preference</InputLabel>
                            <Select className=" w-100" labelId="spp" id="spp" label="spp">
                                <MenuItem value="de">Delhi</MenuItem>
                                <MenuItem value="ko">Kolkata</MenuItem>
                                <MenuItem value="ch">Chennai</MenuItem>
                                <MenuItem value="mb">Mumbai</MenuItem>
                                <MenuItem value="bp">Bhopal</MenuItem>
                            </Select>
                        </FormControl>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1></h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6}>
                        <FormControl className=" w-100 my-2">
                            <InputLabel id="tpp">Third Preference</InputLabel>
                            <Select className=" w-100" labelId="tpp" id="tpp" label="tpp">
                                <MenuItem value="de">Delhi</MenuItem>
                                <MenuItem value="ko">Kolkata</MenuItem>
                                <MenuItem value="ch">Chennai</MenuItem>
                                <MenuItem value="mb">Mumbai</MenuItem>
                                <MenuItem value="bp">Bhopal</MenuItem>
                            </Select>
                        </FormControl>

                    </Col>
                </Row>
            </div>

        </div>

    );
}

export default Education;
