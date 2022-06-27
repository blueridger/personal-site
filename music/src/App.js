import "./App.css";
import * as React from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Tooltip,
  IconButton,
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { HelpOutline } from "@mui/icons-material";
import { getNote, availableModes as modes, keys, isTheoretical } from "./music";
import Confetti from 'react-dom-confetti';
import { useEffect } from "react";

const config = {
  angle: 20,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

const theme = createTheme({
  palette: {
    text: {
      primary: '#DC79D6',
      secondary: '#DC79D6',
    },
    background: {
      paper: '#141313',
    },
  },
});

const RANDOM = "random"
const RANDOM_TH = "random w/theoreticals"

function App() {
  const [key, setKey] = React.useState(keys[0]);
  const [mode, setMode] = React.useState(modes[0]);
  const [num, setNum] = React.useState(1);
  const [answer, setAnswer] = React.useState(null);
  const [keyConfig, setKeyConfig] = React.useState(
    localStorage.getItem("keyConfig") || "C"
  );
  const [modeConfig, setModeConfig] = React.useState(
    localStorage.getItem("modeConfig") || "ionian"
  );
  const [numConfig, setNumConfig] = React.useState(
    localStorage.getItem("numConfig") || 7
  );
  const [confetti, setConfetti] = React.useState(false);
  useEffect(() => localStorage.setItem("keyConfig", keyConfig), [keyConfig])
  useEffect(() => localStorage.setItem("modeConfig", modeConfig), [modeConfig])
  useEffect(() => localStorage.setItem("numConfig", numConfig), [numConfig])

  const createQuestion = React.useCallback(
    function () {
      const newMode =
        modeConfig === RANDOM
          ? modes[Math.floor(Math.random() * modes.length)]
          : modeConfig;
      let newKey = keyConfig === RANDOM || keyConfig === RANDOM_TH
        ? keys[Math.floor(Math.random() * keys.length)]
        : keyConfig;
      while (keyConfig === RANDOM && isTheoretical(newKey, newMode, numConfig))
        newKey = keys[Math.floor(Math.random() * keys.length)];
      const newNum = Math.floor(Math.random() * numConfig) + 1;
      setAnswer(getNote(newKey, newNum, newMode));
      setKey(newKey);
      setNum(newNum);
      setMode(newMode);
    },
    [keyConfig, modeConfig, numConfig]
  );
  const checkAnswer = React.useCallback(
    function (e) {
      e.preventDefault();
      if (e.target[0].value === answer) {
        setConfetti(true)
        createQuestion();
        setTimeout(() => setConfetti(false), 5)
        e.target[0].value = "";
      }
    },
    [createQuestion, answer]
  );
  const handleKeySelect = React.useCallback((e) => {
    setKeyConfig(e.target.value);
  }, []);
  const handleModeSelect = React.useCallback((e) => {
    setModeConfig(e.target.value);
  }, []);
  const handleNumSelect = React.useCallback((e) => {
    setNumConfig(e.target.value);
  }, []);
  React.useEffect(createQuestion, [createQuestion]);
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <h1>{mode[0].toUpperCase() + mode.slice(1)}</h1>
        <p>
          What is chord number {num} in the key of {key}
        </p>
        <form onSubmit={checkAnswer}>
          <span>
          
          <Confetti active={ confetti } config={ config } />
            <TextField
              id="answer"
              variant="filled"
              size="normal"
              autoComplete="off"
              inputProps={{
                style: { fontSize: 40 },
              }}
              autoFocus
            />
            <Tooltip title="Press enter to check. Example answer formats: Gbm, A#, B">
              <IconButton>
                <HelpOutline fontSize="large" />
              </IconButton>
            </Tooltip>
          </span>
        </form>
        <br />
        <div className="settings">
          <FormControl >
            <InputLabel id="key-label" >Key</InputLabel>
            <Select
              labelId="key-label"
              id="keySelect"
              value={keyConfig}
              label="Key"
              onChange={handleKeySelect}
            >
              {[RANDOM, RANDOM_TH].concat(keys).map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />

          <FormControl>
            <InputLabel id="mode-label">Mode</InputLabel>
            <Select
              labelId="mode-label"
              id="modeSelect"
              value={modeConfig}
              label="Mode"
              onChange={handleModeSelect}
            >
              {[RANDOM].concat(modes).map((x) => (
                <MenuItem key={x} value={x}>
                  {x}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />

          <FormControl>
            <InputLabel id="num-label">Numbers</InputLabel>
            <Select
              labelId="num-label"
              id="numSelect"
              value={numConfig}
              label="Numbers"
              onChange={handleNumSelect}
            >
              <MenuItem value={7}>1-7</MenuItem>
              <MenuItem value={13}>1-13</MenuItem>
            </Select>
          </FormControl>
        </div>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
