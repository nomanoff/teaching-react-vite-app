// create a home component with a simple message
import { NavLink } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <NavLink to="projects">Projects</NavLink>
      <NavLink to="/" end>
        home
      </NavLink>
      <NavLink to="/concerts">All Concerts</NavLink>
      <NavLink to="/account">Account</NavLink>
    </div>
  );
};

export default Dashboard;
