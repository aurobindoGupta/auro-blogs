import { Box, Container } from "@mui/material";
import NavBar from "../../components/NavBar.jsx";
import RenderCard from "../../components/RenderCard.jsx";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addInitialPosts } from "../../store/slices/postSlices.jsx";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts);
  const reverseData = [...data].reverse();
  console.log(data.length);
  useEffect(() => {
    axios.get("http://192.168.1.4:3001/api/posts").then((res) => {
      dispatch(addInitialPosts(res.data));
    });
  }, []);

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
            position: "relative",
            top: 100,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {reverseData.map((item) => {
            return (
              <>
                <RenderCard data={item} />
              </>
            );
          })}
        </Box>
      </Container>
    </>
  );
};
export default Home;
