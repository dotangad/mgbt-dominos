import React from "react";
import { Router } from "@reach/router";

import Landing from "./pages/Landing";
import Deals from "./pages/Deals";
import Order from "./pages/Order";
import Status from "./pages/Status";

function Routes() {
  return (
    <Router>
      <Landing path="/" />
      <Order path="/order" />
      <Deals path="/deals" />
      <Status path="/status" />
    </Router>
  );
}

export default Routes;
