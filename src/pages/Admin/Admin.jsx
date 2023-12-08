import React, { useEffect, useState } from "react";
import { dispatch } from "../../redux/store";
import { AdminPollApi } from "../../redux/Slices/AdminPoll";
import { useSelector } from "react-redux";
import {
  Backdrop,
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
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DeleteTitleApi } from "../../redux/Slices/DeleteTitle";
import { ToastContainer } from "react-toastify";
// import { Navigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

import AddIcon from "@mui/icons-material/Add";
import RefereshAnimation from "../../components/RefereshAnimation";
const Admin = () => {
  const navigate = useNavigate();
  const [deleteTitleId, setDeleteId] = useState(null);
  const [optionData, setOptionData] = useState(null);
  const pollList = useSelector((state) => state.AdminPoll);
  const deleteOptionLoading = useSelector(
    (state) => state.DeleteOption.loading
  );
  const deleteTitleLoading = useSelector((state) => state.DeleteTitle.loading);
  const EditTitleLoading = useSelector((state) => state.EditTitle.loading);
  const AddPollLoading = useSelector((state) => state.AddPoll.loading);
  const AddOptionLoading = useSelector((state) => state.AddOption.loading);
  const AdminPollLoading = useSelector((state) => state.AdminPoll.loading);
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    dispatch(AdminPollApi());
  }, [deleteOptionLoading, deleteTitleLoading, EditTitleLoading]);

  const deleteOptionData = (pollId, optionText) => {
    dispatch(DeleteOptionApi(pollId, optionText));
    setOptionData(optionText);
  };
  const deleteTitleData = (titleID) => {
    dispatch(DeleteTitleApi(titleID));
    setDeleteId(titleID);
  };
  if (
    AddPollLoading ||
    EditTitleLoading ||
    AddOptionLoading ||
    AdminPollLoading
  ) {
    return (
      <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    );
  }
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
        {" "}
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={"/addPoll"}
        >
          <Typography variant="h5">Add Poll +</Typography>
        </NavLink>
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
            EditTitle={
              <Link to={`EditTitle/${dataList._id}`} state={dataList.title}>
                <EditIcon />
              </Link>
            }
            AddTitle={
              dataList.options.length < 4 && (
                <Link
                  to={`AddOption/${dataList._id}`}
                  style={{ color: "black" }}
                  state={dataList.title}
                >
                  <AddIcon />
                </Link>
              )
            }
            deleteTitle={
              dataList._id === deleteTitleId && deleteTitleLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                <DeleteIcon
                  color="error"
                  sx={{ cursor: "pointer" }}
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
      <ToastContainer />
    </Box>
  );
};

export default Admin;
