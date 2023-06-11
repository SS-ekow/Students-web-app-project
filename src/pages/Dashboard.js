import React from "react";
import NavBar from "../components/NavBar";

const Dashboard = ()=> {
    return (
      <>
      <div>
        <NavBar />
        <h1>Dashboard Page</h1>
      </div>
      <nav>
    <ul>
      <li><a href="#overview">Overview</a></li>
      <li><a href="#schedule">Schedule</a></li>
      <li><a href="#grades">Grades</a></li>
      <li><a href="#assignments">Assignments</a></li>
    </ul>
  </nav>

  <section id="overview">
      <h2>Overview</h2>
      
    </section>

    <section id="schedule">
      <h2>Schedule</h2>
      
    </section>

    <section id="grades">
      <h2>Grades</h2>
      
    </section>

    <section id="assignments">
      <h2>Assignments</h2>
     
    </section>
      </>
    );
  }
export default Dashboard;