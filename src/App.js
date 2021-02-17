import React, { useEffect, useRef } from "react";
import { Grid, IconButton } from "@material-ui/core";
import { MicNone, Mic } from "@material-ui/icons";
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState, toggleRecording } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Expense" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Expense" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Income" />
        </Grid>
        <IconButton className={classes.speech} onFocus={toggleRecording}>
          <Mic />
        </IconButton>
      </Grid>
    </div>
  );
};

export default App;
