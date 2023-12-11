import React, { useEffect, useState } from "react";
import { dispatch } from "../../redux/store";
import { AdminPollApi } from "../../redux/Slices/AdminPoll";
import { useSelector } from "react-redux";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  TablePagination,
  Typography,
} from "@mui/material";
import PollItem from "../../components/PollItem";
import DeleteIcon from "@mui/icons-material/Delete";
import InnerPoll from "../../components/InnerPoll";
import { DeleteOptionApi } from "../../redux/Slices/DeleteOption";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DeleteTitleApi } from "../../redux/Slices/DeleteTitle";
import { ToastContainer } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import RefereshAnimation from "../../components/RefereshAnimation";

const Admin = () => {
  const navigate = useNavigate();

  const [deleteTitleId, setDeleteId] = useState(null);
  const [optionData, setOptionData] = useState(null);
  const pollList = useSelector((state) => state.AdminPoll.data);
  const deleteOptionLoading = useSelector(
    (state) => state.DeleteOption.loading
  );
  const deleteTitleLoading = useSelector((state) => state.DeleteTitle.loading);
  const EditTitleLoading = useSelector((state) => state.EditTitle.loading);
  const AddPollLoading = useSelector((state) => state.AddPoll.loading);
  const AddOptionLoading = useSelector((state) => state.AddOption.loading);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    localStorage.setItem("currentPage", newPage); 
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0); 
    localStorage.setItem("rowsPerPage", newRowsPerPage); 
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const savedPage = localStorage.getItem("currentPage");
    const savedRowsPerPage = localStorage.getItem("rowsPerPage");

    if (savedPage !== null) {
      setPage(parseInt(savedPage, 10));
    }

    if (savedRowsPerPage !== null) {
      setRowsPerPage(parseInt(savedRowsPerPage, 2));
    }

    dispatch(AdminPollApi()).then(() => setLoading(false));
  }, [
    deleteOptionLoading,
    deleteTitleLoading,
    EditTitleLoading,
    AddOptionLoading,
    AddPollLoading,
  ]);

  const deleteOptionData = (pollId, optionText) => {
    dispatch(DeleteOptionApi(pollId, optionText));
    setOptionData(optionText);
  };

  const deleteTitleData = (titleID) => {
    dispatch(DeleteTitleApi(titleID));
    setDeleteId(titleID);
  };

  if (loading) {
    return <RefereshAnimation />;
  }

  const paginatedPollList = pollList.slice(
    page * rowsPerPage,
    (page + 1) * rowsPerPage
  );

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
        <Typography variant="h3"> Welcome to Admin Poll</Typography>
      </Box>
      <Stack
        direction={"column"}
        sx={{ alignItems: "center", width: "90%", margin: "10px auto" }}
        spacing={2}
      >
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
        {paginatedPollList.map(
          (dataList) =>
            dataList.options.length > 0 && (
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
            )
        )}
      </Box>
      <TablePagination
        component="div"
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        count={pollList.length}
        page={page}
        sx={{
          width: "50%",
          margin: "auto",
          justifyContent: "center",
          display: "flex",
        }}
        onPageChange={handleChangePage}
      />
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
