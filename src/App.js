import React from "react";
import BreedsList from "./feature/breeds/BreadList";
import { CssBaseline, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <BreedsList />
      </Container>
    </div>
  );
}

export default App;
