import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { FormControl, IconButton, InputAdornment, InputLabel, List, ListItem, ListItemText, OutlinedInput, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import cytoscape from "cytoscape";
import CytoscapeComponent from 'react-cytoscapejs';

// make this stated
const elements = [
  { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
  { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
  { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
];

export default function App() {
  return (
    <CytoscapeComponent
        elements={elements}
    // make this not inlined
        style={ { width: '100vw', height: '100vh' } }
    />
  );
}
