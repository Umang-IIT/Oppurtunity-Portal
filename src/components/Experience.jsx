import React from "react";
import Input from "./Input";

function Experience(){
    return(
        <div>
            <div className="container">
                <h1 style={{textAlign: "center"}}>Experience</h1>
                <div className="container1">
                    <Input Heading="JOBS" Add="Jobs"/>
                    <hr />
                    <Input Heading="INTERNSHIPS" Add="Internship"/>
                    <hr />
                    <Input Heading="POSITION OF RESPONSIBILITY" Add="positon of resposibility"/>
                    <hr />
                    <Input Heading="TRAININGS/ COURSES" Add="training/courses"/>
                    <hr />
                    <Input Heading="ACADEMIC/ PERSONAL PROJECTS" Add="academic/ personal project"/>
                </div>
            

            </div>
        </div>
    );
}

export default Experience;