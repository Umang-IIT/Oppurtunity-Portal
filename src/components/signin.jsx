import React from "react";
import "./signin.css";
import intern from "../images/intern.jpeg";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';

const SigninForm = () => {
    return (
        <div className="cont"  >
            <div className="container2SI">


                <div className="formSU">
                    <h3 style={{ textAlign: 'center', width: '100%', marginBottom: '10%' }}>Sign In</h3>
                    <div>
                        <form>
                            <div className="row tbox">
                                <div className="col-1">
                                    <i className="bi bi-envelope" style={{ fontSize: '2rem', color: 'gray' }}></i>
                                </div>&nbsp;&nbsp;
                                <div className="col-6">
                                    <input type="text" class="form-control" placeholder="Email Address" name="email" id="email" />
                                </div>
                                <div style={{ marginLeft: '-20px' }} className="col-2">
                                    <select className="form-control-optSI" >
                                        <option className="form-control-optSI" value="1">@kgpian.iitkgp.ac.in</option>
                                        <option className="form-control-optSI" value="2">@iitkgp.ac.in</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row tbox">
                                <div className="col-1">
                                    <i className="bi bi-lock-fill" style={{ fontSize: '2rem', color: 'gray' }}></i>
                                </div>&nbsp;&nbsp;
                                <div className="col-8">
                                    <input type="text" class="form-control" placeholder="Password" name="password" id="password" />
                                </div>
                            </div>
                            {/* <div className="row tbox">
                                <div className="col-1">
                                    <i className="bi bi-file-lock2" style={{ fontSize: '2rem', color: 'gray' }}></i>
                                </div>&nbsp;&nbsp;
                                <div className="col-8">
                                    <input type="text" class="form-control" placeholder="Confirm Password" name="cpassword" id="cpassword" />
                                </div>
                            </div> */}
                            <div className="row">
                                <div className="col-11">
                                    <input type="submit" className="btn btn-lg btn-outline-secondary" style={{ width: '103%' }} value="Sign Up" />
                                </div>

                            </div>
                            <div className="row mt-3 justify-content-center">
                                <h5 className="text-center text-success font-weight-bold">Didn't Sign Up yet?</h5>
                                <button type="button" style={{ width: '40%' }} className=" btn btn-primary mt-3" ><Link to="/signup"><span className="text-white" ><h5>Sign Up</h5></span></Link></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="imageSI">
                    {/* <img width="100%" height="100%" src={intern} alt="internship" /> */}
                </div>
            </div>
        </div>
    );
}

export default SigninForm;