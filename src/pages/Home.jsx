// create a home component with a simple message

import { NavLink } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <NavLink to="projects">Projects</NavLink>
      <br />
      <NavLink to="/dashboard" end>
        home
      </NavLink>
      <br />
      <NavLink to="/concerts">All Concerts</NavLink>
      <br />
      <NavLink to="/account">Account</NavLink>

      <br />

      <NavLink
        to="/messages"
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      >
        Messages
      </NavLink>
    </div>
  );
};

export default Home;
