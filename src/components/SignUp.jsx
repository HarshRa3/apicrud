import {Box,Button,FormControl,InputLabel,MenuItem,Select,Stack,TextField,Typography,} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signUpSchema } from "../schemas";
import "../components/stylecss/style.css";
import { useDispatch, useSelector } from "react-redux";
import { resetReducer, signUpApi } from "../redux/Slices/signupSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const signupSlice = useSelector((state) => state.signUp);
  console.log(signupSlice);
  useEffect(() => {
    if (signupSlice.data.error === 1) {
      toast.error("User already exits !!!!!")
      dispatch(resetReducer());
    } else if (signupSlice.data.error === 0) {
      toast.success('signUp successfully')
      navigate("/");
      dispatch(resetReducer());
    }
  }, [signupSlice.isSuccess]);
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      role: "Guest",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      try {
        if (values.name.length < 5) {
          console.log("error");
        } else if (values.password.length < 5) {
          console.log("error");
        } else {
          dispatch(signUpApi(values));
          console.log(signUpApi(values));
          dispatch(resetReducer());
        }
      } catch (error) {
        dispatch(resetReducer());
      }
    },
  });

  return (
    <>
    <ToastContainer/>
      <Box
        className="formBodyStyle"
      >
        <Stack
          direction={"column"}
          spacing={2}
          className="form_container"
        >
          <Typography variant="h3">SIGN UP</Typography>
          <Stack
            sx={{ width: "100%", fontSize: "19px" }}
            direction={"column"}
            spacing={2}
            component="form"
            onSubmit={formik.handleSubmit} // It is for Submittion of SignIn form
          >
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Name :
            </Typography>
            <TextField
              fullWidth
              label="Name"
              type="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                <Typography variant="p" color={"red"}>
                  {formik.errors.name &&
                    formik.touched.name &&
                    formik.errors.name}
                </Typography>
              }
            />
            <Typography variant="h6" sx={{ textAlign: "left" }}>
              Password :
            </Typography>
            <TextField
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={
                <Typography variant="p" color={"red"}>
                  {formik.errors.password &&
                    formik.touched.password &&
                    formik.errors.password}
                </Typography>
              }
            />
            <Box>
              <Typography variant="h6" sx={{ textAlign: "left", mb: "10px" }}>
                Role :
              </Typography>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.role}
                  name="role"
                  label="role"
                  onChange={formik.handleChange}
                  sx={{ textAlign: "left" }}
                >
                  <MenuItem value={"Guest"}>Guest</MenuItem>
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" type="submit">
              Sign up
            </Button>
          </Stack>
          <Box>
            <NavLink style={{ color: "#1565c0" }} to={"/"} variant="body2">
              Already have an account? Sign in
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SignUp;
