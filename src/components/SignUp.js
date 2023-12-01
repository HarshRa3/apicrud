import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import { signUpSchema } from "../schemas";
import "../components/stylecss/style.css"
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      role: "Guest",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      // Add your signup logic here
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
          // sx={formContainerStyle}
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
            <NavLink
              style={{ color: "#1565c0" }}
              to={"/"}
              variant="body2"
            >
              Already have an account? Sign in
            </NavLink>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default SignUp;
