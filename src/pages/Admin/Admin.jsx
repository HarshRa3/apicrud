import React, { useEffect } from "react";
import { dispatch } from "../../redux/store";
import { AdminPollApi } from "../../redux/Slices/AdminPoll";
import { useSelector } from "react-redux";
import { Box, Button, Stack, Typography } from "@mui/material";
import PollItem from "../../components/PollItem";

const Admin = () => {
  const pollList = useSelector((state) => state.AdminPoll.data);
  console.log(pollList.data);

  useEffect(() => {
    dispatch(AdminPollApi());
  }, [pollList.isSuccess]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
        bgcolor: "#63cdda",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Admin Poll</Typography>
      </Box>
      <Stack
        direction={"column"}
        sx={{ alignItems: "flex-end", width: "90%", margin: "auto" }}
        spacing={2}
      >
        <Typography variant="h5">Add Poll +</Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button variant="contained">Log Out</Button>
        </Box>
      </Stack>
      <PollItem />
    </Box>
  );
};

export default Admin;
