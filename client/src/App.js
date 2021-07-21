import React from "react"
import Navbar from "./components/Navbar"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from "./components/Home"
import Add from "./components/Add"
import Views from "./components/Views"
// import "./App.css"
import Transactions from "./components/Transaction"
import Transfer from "./components/Transfer"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={Add} />
      <Route path="/views" component={Views} />
      <Route path="/transfer" component={Transfer} />
      <Route path="/transactions" component={Transactions} />
    </div>
    </BrowserRouter>
  );
}

export default App;
