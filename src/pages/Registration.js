import React from "react";
import NavBar from "../components/NavBar";



const Registration = () =>{

  
    return(
      <>
      <div>
        <NavBar/>
        <h1>Student registration Page</h1>
      </div>
      <form>
    <div>
      <label>Full Name:</label>
      <input type="text" name="fullName" required/>
    </div>
    <div>
      <label>Email:</label>
      <input type="email" name="email" required/>
    </div>
    <div>
      <label>Department:</label>
      <select name="department" required>
        <option value="">Select Department</option>
        <option value="Computer Engineering">Computer Engineering</option>
        <option value="Material Science and Engineering">Material Science and Engineering</option>
        <option value="Food Process Engineering">Food Process Engineering</option>
        <option value="Biomedical Engineering">Biomedical Engineering</option>
        <option value="Agricultural Engineering">Agricultural Engineering</option>
      </select>
    </div>
    <div>
      <label>Level:</label>
      <select name="level" required>
        <option value="">Select Level</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
      </select>
    </div>
    <label>Semester:</label>
    <select name="semester" required>
      <option value="">Select Semester</option>
      <option value="First">First</option>
      <option value="Second">Second</option>
    </select>
    <div>
      <label>Courses to Register:</label>
      <div>
        <input type="checkbox" name="course" value="Course 1"/>
        <label for="course1">Course 1</label>
      </div>
      <div>
        <input type="checkbox" name="course" value="Course 2"/>
        <label for="course2">Course 2</label>
      </div>
      <div>
        <input type="checkbox" name="course" value="Course 3"/>
        <label for="course3">Course 3</label>
      </div>
      
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
      </>
  
    );
  }

export default Registration;