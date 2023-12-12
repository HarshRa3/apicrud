import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  useEffect(() => {
    const checkAuthentication = () => {
      if (token) {
        if (role === "Admin" ) {
          navigate("/admin");
        } else if (role === "Guest" ) {
          navigate("/userPoll");
        }
      } else {
        navigate("/");
      }
    };
    checkAuthentication();
  }, [token, role]);
  
  return <div>{props.children}</div>;
};

export default Protected;