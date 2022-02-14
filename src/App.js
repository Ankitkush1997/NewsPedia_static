import React from "react";
import Card from "./components/card/card.component";
import Navbar from "./components/navbar/navbar.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const allDataObject = {
    bussiness: "0",
    Entertainment: "1",
    general: "2",
    health: "3",
    science: "4",
    sports: "5",
    Technology: "6",
  };
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Card newsType={allDataObject.general} />
        </Route>
        <Route exact path="/general">
          <Card newsType={allDataObject.general} />
        </Route>
        <Route exact path="/business">
          <Card newsType={allDataObject.bussiness} />
        </Route>
        <Route exact path="/entertainment">
          <Card newsType={allDataObject.Entertainment}/>
        </Route>
        <Route exact path="/health">
          <Card newsType={allDataObject.health}/>
        </Route>
        <Route exact path="/science">
          <Card newsType={allDataObject.science}/>
        </Route>
        <Route exact path="/sports">
          <Card newsType={allDataObject.sports} />
        </Route>
        <Route exact path="/technology">
          <Card newsType={allDataObject.Technology} />
        </Route>
      </Switch>
      </Router>
    </>
  );
};

export default App;
