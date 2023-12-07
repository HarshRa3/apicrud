import { Box, Stack, TextField } from '@mui/material'
import React from 'react'

const AddPoll = () => {
  return (
    <Box className='formBodyStyle' >
     <Stack direction={"column"} className="form_container">
        
        <TextField label="Title of the poll"/>
     </Stack>
    </Box>
  )
}

export default AddPoll
