import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const worker = new Worker("worker.js");
worker.onmessage = function(m) {
  let data = m.data;
  console.log("worker sent " + data);
}

export default function App() {
  const [msg, setMsg] = useState("");

  function sendMessage() {
    console.log("sending " + msg);
    worker.postMessage(msg);
  }

  return (
    <Container maxWidth="sm">
      <FormControl sx={{ m: 1}} variant="outlined">
        <InputLabel htmlFor="to-worker">message to worker</InputLabel>
        <OutlinedInput
          id="to-worker"
          type="text"
          onChange={(e) => setMsg(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="send to worker"
                onClick={sendMessage}
              >
                <SendIcon />
              </IconButton>
            </InputAdornment>
          }
        ></OutlinedInput>
      </FormControl>
      <Typography>Messages are currently logged in the browser console. Next step: make them visible.</Typography>
    </Container>
  );
}
