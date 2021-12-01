import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Skill from "./skills";
import Personal from "./Personal";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SchoolIcon from "@mui/icons-material/School";
import BuildIcon from "@mui/icons-material/Build";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";
import Person from "@mui/icons-material/Person";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { display } from "@mui/system";
import Preference from "./preference";

function Form() {
  const [value, setValue] = React.useState(0);

  function Next() {
    setValue(value + 1);
  }
  function Prev() {
    setValue(value - 1);
  }
  function Submit() {
    document.getElementById("resume").submit();
  }


  return (
    <div className="mt-4">


      <form id="resume" action="/">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Personal Details" icon={<Person />} />
          <BottomNavigationAction label="Education" icon={<SchoolIcon />} />
          <BottomNavigationAction label="Experience" icon={<WorkIcon />} />
          <BottomNavigationAction label="Skills" icon={<BuildIcon />} />
          <BottomNavigationAction label="Prefrernce" icon={<BuildIcon />} />
        </BottomNavigation>
        <span style={value === 0 ? { display: "block" } : { display: "none" }}>
          <Personal />
        </span>
        <span style={value === 1 ? { display: "block" } : { display: "none" }}>
          <Education />
        </span>
        <span style={value === 2 ? { display: "block" } : { display: "none" }}>
          <Experience />
        </span>
        <span style={value === 3 ? { display: "block" } : { display: "none" }}>
          <Skill />
        </span>
        <span style={value === 4 ? { display: "block" } : { display: "none" }}>
          <Preference />
        </span>
        <div className="container">
          <div className="container1" style={{ border: "0px" }}>
            <Stack justifyContent="space-between" direction="row">
              <span style={(value === 0) ? { visibility: "hidden" } : { display: "block" }}><Button onClick={Prev} variant="contained">Back</Button></span>
              <span style={(value === 4) ? { display: "none" } : { display: "block" }}><Button onClick={Next} variant="contained">Next</Button></span>
              <span style={(value === 4) ? { display: "block" } : { display: "none" }}><Button onClick={Submit} variant="contained">Submit</Button></span>
            </Stack>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
