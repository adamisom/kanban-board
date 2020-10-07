import React from "react";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import TopNav from "./shared/TopNav";
import BoardsDashboardContainer from "./dashboard/BoardsDashboardContainer";
import BoardContainer from "./dashboard/BoardContainer";
import store from "../lib/Store";

const Application = () => {
  return (
    <Provider store={store}>
      <TopNav />
      <Route path="/" exact component={BoardsDashboardContainer} />
      <Route path="/boards/:id" exact component={BoardContainer} />
    </Provider>
  );
};

export default Application;
