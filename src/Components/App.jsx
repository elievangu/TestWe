//npm import
import React from "react";

//local import

import NavBar from "./NavBar/NavBar";
import BooksHome from "../Containers/Home/BooksHome";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BooksHome />
    </div>
  );
};

export default App;
