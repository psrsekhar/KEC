import { Fragment } from "react";

import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}

export default App;
