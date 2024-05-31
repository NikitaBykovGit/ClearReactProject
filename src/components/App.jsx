import React, { Fragment } from "react";

import "../styles/App.css"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"

function App() {
  return (
    <Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </Fragment>
  )
}

export default App;
