import React from 'react';
import "./skills.css";
import { useState } from 'react';

const Skills = () => {
    const [newSkill, setNewSkill] = useState();
    const [skills, setSkills] = useState([]);

    const AddSkill = (e) => {

        e.preventDefault();
        setSkills([...skills, newSkill]);
        setNewSkill("");
        // console.log(skills);


    }
    let tskill;
    if (skills.length !== 0) {
        tskill = (skills.map(item => {
            return (

                <div className="box">{item}</div>
            )
        }))
    }
    return (
        <div className="justify-content-center">
            <h2 className=" text-center mt-5">Skills</h2>
            <p className=" text-center text-secondary">Include atleast 3-5 of your top skill to help your application stand out</p>
            <div className=" skills">

                <form onSubmit={(e) => AddSkill(e)}>
                    <div className="form">
                        {/* <label for="addskill">Add Skills</label> */}
                        <input type="text" id="addskill" className="form-grp mt-3" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} name="addskill" placeholder="eg: Reactjs.." required />&nbsp;
                        <input type="submit" value="Add skill" className="btn btn-sm btn-primary mt-3 " />
                    </div>
                </form>
                <div className="row boxes mt-3">
                    {tskill}
                    {/* till the time it is rendered the Addskill fn behaves abnormally so make sure that it is rendered like tskill here */}
                    {/* {console.log(skills)} */}
                </div>


            </div>
        </div>
    );
}

export default Skills;