import {
  Card,
  CardContent,
  CardActions,
  //Stack,
  Typography,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const RenderCard = () => {
  const [openModal, setOpenmodal] = useState(false);
  const navigate = useNavigate();

  const HandleOpenBlog = () => {
    return (
      <Modal
        open={openModal}
        onClose={() => setOpenmodal((prev) => !prev)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...modalStyle, width: 400 }}>
          <h2 id="modal-title">Text in a modal</h2>
          <p id="modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <Button variant="outlined" onClick={()=>navigate('/editor')} >Edit</Button>
        </Box>
      </Modal>
    );
  };
  return (
    <>
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
          <Button
            variant="outlined"
            size="small"
            onClick={() => setOpenmodal((prev) => !prev)}
          >
            Read More
          </Button>
        </CardActions>
      </Card>
      <HandleOpenBlog />
    </>
  );
};
export default RenderCard;
