import React, { useEffect, useState } from "react";
import { dispatch } from "../../redux/store";
import { AdminPollApi } from "../../redux/Slices/AdminPoll";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import PollItem from "../../components/PollItem";
import DeleteIcon from "@mui/icons-material/Delete";
import InnerPoll from "../../components/InnerPoll";
import { DeleteOptionApi } from "../../redux/Slices/DeleteOption";
import { useNavigate } from "react-router-dom";
import { DeleteTitleApi } from "../../redux/Slices/DeleteTitle";
import { ToastContainer } from "react-toastify";
// import { Navigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const [deleteTitleId, setDeleteId] = useState(null);
  const [optionData, setOptionData] = useState(null);
  const pollList = useSelector((state) => state.AdminPoll);
  const deleteOptionLoading = useSelector(
    (state) => state.DeleteOption.loading
  );
  const deleteTitleLoading = useSelector((state) => state.DeleteTitle.loading);
  console.log(deleteTitleLoading);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    dispatch(AdminPollApi());
  }, [deleteOptionLoading, deleteTitleLoading]);

  const deleteOptionData = (pollId, optionText) => {
    dispatch(DeleteOptionApi(pollId, optionText));
    setOptionData(optionText);
  };
  const deleteTitleData = (titleID) => {
    dispatch(DeleteTitleApi(titleID));
    setDeleteId(titleID);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
        bgcolor: "#63cdda75",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">Admin Poll</Typography>
      </Box>
      <Stack
        direction={"column"}
        sx={{ alignItems: "center", width: "90%", margin: "10px auto" }}
        spacing={2}
      >
        <Typography variant="h5">Add Poll +</Typography>
      </Stack>
      <Box
        sx={{
          height: "70%",
          overflow: "auto",
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        {pollList.data.map((dataList) => (
          <PollItem
            title={dataList.title}
            key={dataList._id}
            deleteTitle={
              dataList._id === deleteTitleId && deleteTitleLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                <DeleteIcon color="error"
                sx={{cursor:'pointer'}}
                  onClick={() => deleteTitleData(dataList._id)}
                />
              )
            }
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
                      color="error"
                      sx={{ cursor: "pointer" }}
                      onClick={() =>
                        deleteOptionData(dataList._id, option.option)
                      }
                    />
                  )
                }
              />
            ))}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: "10px",
        }}
      >
        <Button variant="contained" onClick={logout}>
          Log Out
        </Button>
      </Box>
      <ToastContainer/>
    </Box>
  );
};

export default Admin;
