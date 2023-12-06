import React, { useEffect, useState } from "react";
import { dispatch } from "../../redux/store";
import { AdminPollApi } from "../../redux/Slices/AdminPoll";
import { useSelector } from "react-redux";
import { Box, Button, CircularProgress, Stack, Typography } from "@mui/material";
import PollItem from "../../components/PollItem";
import DeleteIcon from "@mui/icons-material/Delete";
import InnerPoll from "../../components/InnerPoll";
import { DeleteOptionApi } from "../../redux/Slices/DeleteOption";
import BasicModal from "../../components/Addpoll";
const Admin = () => {
  const [optionData, setOptionData] = useState(null)
  const pollList = useSelector((state) => state.AdminPoll);
  const deleteOptionLoading=useSelector(state=>state.DeleteOption.loading)
  console.log(deleteOptionLoading);
  
  useEffect(() => {
    dispatch(AdminPollApi());
  }, [deleteOptionLoading]);

  const deleteOptionData = (pollId, optionText) => {
    dispatch(DeleteOptionApi(pollId, optionText));
    setOptionData(optionText);
  };

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
         <BasicModal/>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <Button variant="contained">Log Out</Button>
        </Box>
      </Stack>
      {pollList.data.map((dataList) => (
        <PollItem
          title={dataList.title}
          key={dataList._id}
          InnerOption={dataList.options.map((option, index) => (
            <InnerPoll
              option={option.option}
              key={index}
              votes={option.vote}
              deleteOption={
                optionData === option.option && deleteOptionLoading ? (
                  <CircularProgress color="inherit" />
                ) : (
                  <DeleteIcon
                  color='error' sx={{cursor:'pointer'}}
                    onClick={() => deleteOptionData(dataList._id, option.option)}
                  />
                )
              }
            />
          ))}
        />
      ))}
    </Box>
  );
};

export default Admin;
