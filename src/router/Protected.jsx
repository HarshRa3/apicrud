import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const navigate = useNavigate();
  const { Component } = props;
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');
  const isAuthenticated = role && token;

  useEffect(() => {
    const checkAuthentication = () => {
      if (!isAuthenticated) {
        navigate("/");
      }
    };
    checkAuthentication();
  }, [isAuthenticated, navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
