import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import './AdminDashboard.css';

//import TeamsChart from '../components/TeamsChart/TeamsChart';
//import PopularCourses from '../components/PopularCourses/PopularCourses';

class AdminDashboard extends Component {

  render() {
    return (
      <div className="hr-teams-dashboard">
        <NavBar/>

        <div className="container" id={"chart"}>
          <div className="row">
            <div className="col-md-8">
              <h3>Team Scores</h3>
              /*<TeamsChart/>*/
            </div>
            <div className="col-md-4">
              <h3>Popular Courses</h3>
              /*<PopularCourses/>*/
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDashboard;
