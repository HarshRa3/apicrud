import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SignUp from "../components/SignUp";
import Admin from "../pages/Admin/Admin";
import User from "../pages/User/User";
// import SignIn from '../components/SignIn'
import AddPoll from "../pages/AddPoll/AddPoll";
import AddOption from "../pages/AddOption/AddOption";
import EditTitle from "../pages/EditTitle/EditTitle";
import Protected from "./Protected";

const Router = () => {
  return (
    <Routes>
      {
        <Route
          path="/"
          element={
            <Protected>
              <HomePage />
            </Protected>
          }
        />
      }
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/admin"
        element={
          <Protected>
            <Admin />
          </Protected>
        }
      >
        <Route path="addPoll" element={<AddPoll />} />
      </Route>
      <Route
        path="/userPoll"
        element={
          <Protected>
            <User />
          </Protected>
        }
      />
      {/* <Route path="/signIn" element={<Protected><SignIn /></Protected>} /> */}

      <Route
        path="admin/EditTitle/:editDataId"
        element={
          <Protected>
            <EditTitle />
          </Protected>
        }
      />
      <Route
        path="admin/AddOption/:optionDataId"
        element={
          <Protected>
            <AddOption />
          </Protected>
        }
      />
    </Routes>
  );
};

export default Router;
