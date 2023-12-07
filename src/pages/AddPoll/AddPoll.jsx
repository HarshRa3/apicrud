import { Box, Button, Fab, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const AddPoll = () => {
  const [newOption, setNewOption] = useState([{ option: "" }]);
  const increseLength = () => {
    if (newOption.length < 4) {
      setNewOption([...newOption, { option: "" }]);
    } else {
      toast.error("only four options are allowed");
    }
  };
  const decreseLength = () => {
    if (newOption.length > 1) {
      const newar = [...newOption];
      newar.pop();
      setNewOption(newar);
    } else {
      toast.error("One Option is necessary");
    }
  };
  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const onchangeValue = [...newOption];
    onchangeValue[index][name] = value;
    setNewOption(onchangeValue);
  };
  return (
    <Box className="formBodyStyle">
      <Stack direction={"column"} spacing={2} className="form_container">
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Add Data Here
        </Typography>
        <TextField label={"Title"} />
        {newOption.map((e, i) => {
          return (
            <TextField
              key={i}
              label={"Option " + (i + 1)}
              name={`option`}
              value={e.option}
              onChange={(event) => handleChange(event, i)}
            />
          );
        })}
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Fab
            variant="contained"
            onClick={() => increseLength()}
            color="success"
          >
            <AddIcon />
          </Fab>
          <Fab
            variant="contained"
            onClick={() => decreseLength()}
            color="error"
          >
            <RemoveIcon />
          </Fab>
        </Stack>
        <Button variant="contained">Submit</Button>
      </Stack>
      <ToastContainer />
    </Box>
  );
};

export default AddPoll;
