import { Box, Container } from "@mui/material";
import TinyEditor from "../../components/TinyEditor";
import NavBar from "../../components/NavBar";

const Editor = () => {
  return (
    <Container sx={{ height: "100%" }}>
      <NavBar />
      <Box sx={{ top: 100, position: "relative", overflow:'scroll', zIndex:0}}>
        <TinyEditor />
      </Box>
    </Container>
  );
};
export default Editor;
