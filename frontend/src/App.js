import React from "react";
import Body from "./components/Body";
import { Toaster } from "react-hot-toast";
import ScrollDialog from "./components/ScrollDialog";

const App = () => {
  return (
    <>
      <Body />
      <Toaster />
      <ScrollDialog />
    </>
  );
};

export default App;
