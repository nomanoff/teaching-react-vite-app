import { Card, CardContent, Typography, Button } from "@mui/material";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StyledCard = styled(Card)`
  width: 300px;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 20px auto;
`;

function ProfileCard() {
  return (
    <ProfileContainer>
      <StyledCard>
        <CardContent>
          <Avatar src="https://picsum.photos/200" alt="Profile Picture" />
          <Typography variant="h5">John Doe</Typography>
          <Typography variant="body2" color="textSecondary">
            Frontend Developer
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
          >
            Follow
          </Button>
        </CardContent>
      </StyledCard>
    </ProfileContainer>
  );
}

export default ProfileCard;
