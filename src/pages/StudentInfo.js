import React from "react";
import NavBar from "../components/NavBar";
import './StudentInfo.css'

const StudentInfo =()=> {
    return (
      <>
      <div>
        <NavBar />
        <h1>Student Info Page</h1>
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
      <input type="checkbox" name="department" value="Computer Engineering"/> Computer Engineering <br/>
      <input type="checkbox" name="department" value="Material Science and Engineering"/> Material Science and Engineering <br/>
      <input type="checkbox" name="department" value="Food Process Engineering"/> Food Process Engineering<br/> 
      <input type="checkbox" name="department" value="Biomedical Engineering"/> Biomedical Engineering <br/>
      <input type="checkbox" name="department" value="Agricultural Engineering"/> Agricultural Engineering <br/>
    </div>
    <div>
      <label>Level:</label>
      <input type="radio" name="level" value="100" required/> 100
      <input type="radio" name="level" value="200"/> 200
      <input type="radio" name="level" value="300"/> 300
      <input type="radio" name="level" value="400"/> 400
    </div>
    <div>
      <label>Gender:</label>
      <input type="radio" name="gender" value="Male" required/> Male
      <input type="radio" name="gender" value="Female"/> Female
      <input type="radio" name="gender" value="Other"/> Other
    </div>
    <div>
      <label>Date of Birth:</label>
      <input type="date" name="dob" required/>
    </div>
    <div>
      <label>Address:</label>
      <textarea name="address" rows="4" required></textarea>
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
      </>
      );
  }

export default StudentInfo;