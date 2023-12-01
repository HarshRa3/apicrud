import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { signInScheema } from "../schemas";
import "../components/stylecss/style.css"
const SignIn = () => {
  const formik = useFormik({
    initialValues: { name: "", password: "" },
    validationSchema: signInScheema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Box
        // sx={formBodyStyle}
        className='formBodyStyle'
      >
        <Stack
          direction={"column"}
          spacing={2}
          className="form_container"
        >
          <Typography variant="h3">SIGN IN</Typography>
          <Stack
            sx={{ width: "100%", fontSize: "19px" }}
            direction={"column"}
            spacing={2}
            component="form"
            onSubmit={formik.handleSubmit} // It is for Submittion of SignIn form
          >
            <Typography variant="h6" sx={{ textAlign: "left", mb: "10px" }}>
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
            <Typography variant="h6" sx={{ mb: "10px", textAlign: "left" }}>
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
            <Button variant="contained" type="submit">
              Sign In
            </Button>
          </Stack>
          <NavLink style={{ color: "#1565c0" }} to={"/signup"} variant="body2">
            Don't have account?Register now
          </NavLink>
        </Stack>
      </Box>
    </>
  );
};

export default SignIn;
