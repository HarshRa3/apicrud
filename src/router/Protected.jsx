
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { dispatch } from "../redux/store";

const Protected = (props) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const isToke=token && role
  useEffect(() => {
    const checkAuthentication = () => {
      if(isToke){
        // navigate('/')
         if(role==='Admin'){
          navigate('/admin')
        }
        else if(role==='Guest'){
          navigate('/userPoll')
        }
      }else if(token===null){
        navigate('/')
      }
    };

    checkAuthentication();
  }, [role,token]);

  return <div>{props.children}</div>;
};

export default Protected;
