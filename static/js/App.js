import React from "react";
import "./App.css";

import {
  About,
  Experiences,
  Footer,
  Landing,
  Navigation,
  Projects,
} from "./components";

const App = () => {
  return (
    <div className={"app"}>
      <Navigation />

      <Landing />
      <About />
      <Experiences />
      <Projects />

      <Footer />
    </div>
  );
};

export default App;
