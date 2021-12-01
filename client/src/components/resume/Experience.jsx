import React, { useState } from "react";
import { Accordion, Card, Col, Row, useAccordionButton } from "react-bootstrap";
import "./edu.css";
import Input from "./Input";
function CustomToggle({ children, eventKey }) {
  const [name, setName] = useState("+");
  const decoratedOnClick = useAccordionButton(eventKey, () => {
    if (name === "+") {
      setName("-");
    } else {
      setName("+");
    }
  });

  return (
    <p className="btn add-btn accordheader" onClick={decoratedOnClick}>
      {name} {children}
    </p>
  );
}

function Experience() {
  return (
    <div>
      <div className="container">
        <h2 style={{ textAlign: "center" }}>Experience</h2>
        <div className="container1">
          <Accordion className="widthAcc">
            <Card>
              {/* <Card.Header>
                <CustomToggle
                  eventKey="0"
                  children="Add Jobs"
                  className="fw-bold"
                ></CustomToggle>
              </Card.Header> */}
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Input Heading="JOBS" Add="Jobs" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <CustomToggle
                  eventKey="1"
                  children="Add Internships"
                  className="fw-bold"
                ></CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Input Heading="INTERNSHIPS" Add="Internship" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <CustomToggle
                  eventKey="2"
                  children="Add Position of Responsibility"
                  className="fw-bold"
                ></CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Input
                    Heading="POSITION OF RESPONSIBILITY"
                    Add="positon of resposibility"
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <CustomToggle
                  eventKey="3"
                  children="Add Training/Cources"
                  className="fw-bold"
                ></CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Input Heading="TRAININGS/COURSES" Add="training/courses" />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <CustomToggle
                  eventKey="4"
                  children="Add Academic/Personal Projects"
                  className="fw-bold"
                ></CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <Input
                    Heading="ACADEMIC/ PERSONAL PROJECTS"
                    Add="academic/ personal project"
                  />
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Experience;
