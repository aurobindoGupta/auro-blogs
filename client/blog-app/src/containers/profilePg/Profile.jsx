import { Box, Container } from "@mui/material";
import NavBar from "../../components/NavBar.jsx";
import RenderCard from "../../components/RenderCard.jsx";

const Profile = () => {
  return (
    <>
      <Container
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <NavBar />

        <Box
          sx={{
            top: 100,
            display: "flex",
            position: "relative",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {[...Array(10)].map(() => RenderCard())}
        </Box>
      </Container>
    </>
  );
};
export default Profile;
