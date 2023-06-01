import {
  Card,
  CardContent,
  CardActions,
  //Stack,
  Typography,
  Box,
  Button,
} from "@mui/material";
import NavBar from "../../components/NavBar.jsx";

const renderCard = () => {
  return (
    <Card
      sx={{
        maxWidth: "30%",
        minWidth: "10rem ",
        background: "pink",
        height: "15rem",
        p: 1,
        m: 1,
      }}
    >
      <CardContent sx={{ p: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          User
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

const Home = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <NavBar />
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
          {[...Array(10)].map(() => renderCard())}
        </Box>
      </Box>
    </>
  );
};
export default Home;
