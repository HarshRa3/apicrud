import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdminPollApi } from "../../redux/Slices/AdminPoll";
import { dispatch } from "../../redux/store";
import PollItem from "../../components/PollItem";
import InnerPoll from "../../components/InnerPoll";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AddVoteApi } from "../../redux/Slices/AddVote";

const User = () => {
  const pollList = useSelector((state) => state.AdminPoll);
  const AdminPollLoading=pollList.loading
  // console.log(AdminPollLoading);
  const [disabledOptions, setDisabledOptions] = useState({});
  const token = localStorage.getItem("token");
  // console.log(pollList);
  // useEffect(() => {
  //   dispatch(AdminPollApi());
  // }, []);
  useEffect(() => {
    const storeDisabledOptions = JSON.parse(
      localStorage.getItem("disabledOptions")
    );
    if (storeDisabledOptions) {
      setDisabledOptions(storeDisabledOptions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("disabledOptions", JSON.stringify(disabledOptions));
  }, [disabledOptions]);
  const header = {
    headers: {
      access_token: token,
    },
  };
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  const VoteChange = (title, OptionId, OptionData) => {
    dispatch(AddVoteApi(OptionId, OptionData, header));
    setDisabledOptions((prevOptions) => ({
      ...prevOptions,
      [title]: true,
    }));
    toast.success("Your Vote has been Submitted", { autoClose: 1000 });
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
        <Typography variant="h3">Welcome User Poll</Typography>
        <Box
          sx={{
            height: "600px",
            overflow: "scroll",
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            margin: "10px 0",
          }}
        >
          {pollList.data.map((dataList) => {
            return (
              <PollItem
                title={dataList.title}
                key={dataList._id}
                InnerOption={dataList.options.map((option, i) => {
                  return (
                    <InnerPoll
                      option={option.option}
                      key={i}
                      votes={
                        <input
                          type="radio"
                          name={dataList._id}
                          style={{ cursor: "pointer" }}
                          onChange={() =>
                            VoteChange(
                              dataList.title,
                              dataList._id,
                              option.option
                            )
                          }
                          disabled={disabledOptions[dataList.title]}
                        />
                      }
                    />
                  );
                })}
              />
            );
          })}
        </Box>
        <Button variant="contained" onClick={() => logout()}>
          Log Out
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default User;
