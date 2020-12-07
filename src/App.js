import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import SearchResult from "./components/SearchResults/SearchResults";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchResult />
    </div>
  );
}

export default App;
