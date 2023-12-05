import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const PollItem = () => {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={1}
        sx={{
          width: "90%",
          margin: "10px auto",
          padding: "10px",
          bgcolor: "#546de5",
          borderRadius: "10px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            bgcolor: "#e66767",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5">hello</Typography>
          <Stack
            direction={"row"}
            spacing={4}
            sx={{ justifyContent: "center" }}
          >
            <Box>
              <EditIcon />
            </Box>
            <Box>
              <DeleteIcon />
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
            bgcolor: "white",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h5">hello</Typography>
          <Stack
            direction={"row"}
            spacing={4}
            sx={{ alignItems:'center' }}
          >
            <Box>
              <Typography variant="h6">Votes</Typography>
            </Box>
            <Box>
              <DeleteIcon />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default PollItem;
