import { Link, NavLink, useNavigate } from "react-router";
import styled from "styled-components";

const StyleButton = styled.button`
  padding: 10px 20px;
  border: 2px solid blue;
  background-color: white;
  color: blue;
`;

const Home = () => {
  let navigate = useNavigate();

  const handleNavigateProject = () => {
    console.log("Move to projects page");

    navigate("/about/project");
  };

  return (
    <div>
      <h1>Home page</h1>

      <NavLink to="/about" end>
        About page
      </NavLink>

      <br />

      <Link to="/contact-me">Contact Me</Link>

      <br />
      <StyleButton onClick={handleNavigateProject}>
        Move to projects page
      </StyleButton>
    </div>
  );
};

export default Home;
