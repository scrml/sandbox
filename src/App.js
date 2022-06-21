import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { FormControl, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemText, OutlinedInput, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const worker = new Worker("worker.js");

export default function App() {
  const [msg, setMsg] = useState("");
  const [msgs, setMsgs] = useState([]);

  worker.onmessage = function(m) {
    let newMsgs = msgs.slice();
    newMsgs.push(m.data);
    setMsgs(newMsgs);
  }

  function sendMessage() {
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
      <Typography>Messages:</Typography>
      <List>
        {msgs.map(pair => (
          <ListItem alignItems="flex-start" key={pair[0]}>
            <ListItemText>{pair[0]}</ListItemText>
            <ListItemText>{pair[1]}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
