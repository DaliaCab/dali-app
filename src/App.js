import React from "react";
import SimpleStudentCard from "./SimpleStudentCard";
import StudentCard from "./StudentCard";

function app(){
  return (
    <div>
      <SimpleStudentCard name="Dalia" name2="Nico"/>
      <StudentCard name="Juan" grade="5to"/>
    </div>
  );
}
export default app;