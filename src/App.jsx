import "./App.css";
import { StyledTitle } from "./components/Title";
import styled from "styled-components";
import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import ProfileCard from "./components/ProfileCardChallange";
import TemporaryDrawer from "./components/TestMUI";

const StyledButton = styled.button`
  background: ${(props) => (props.primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.primary ? "white" : "#BF4F74")};
  font-size: ${(props) => (props.primary ? "2em" : "2em")};
  margin: 1em;
  padding: 0.25em 1em;
  border: ${(props) =>
    props.black ? "2px dashed white" : "2px solid #bf4f74"};
  border-radius: 3px;
`;

const StyledButtonTwo = styled(StyledButton)`
  color: blue;
  border-radius: 10px;
`;

const StyledAlaryIcon = styled(AccessAlarmIcon)`
  color: red;
`;

function App() {
  return (
    <div>
      <StyledTitle>Hello this is version 0.0.4</StyledTitle>
      <StyledButton>Normal</StyledButton>
      <StyledButton primary={true} black={true}>
        Primary
      </StyledButton>

      <StyledButtonTwo>Normal</StyledButtonTwo>

      <Button variant="contained">Click me</Button>

      <StyledAlaryIcon />

      <TemporaryDrawer />
      <ProfileCard />
    </div>
  );
}

export default App;
