import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { DashboardLayout } from "./layout/DashboardLayout";
import Location from "./locations/Location";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Statistics from "./stats/statistics";
import { useDispatch } from "react-redux";
import { getLocations } from "../actions/locations";
import Alerts from "./layout/Alerts";

function App() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getLocations());
  }, );
  return (
    <Router>
      <Alerts />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Statistics />} />
            <Route path="/locations" element={<Location />} />
          </Routes>
        </DashboardLayout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
