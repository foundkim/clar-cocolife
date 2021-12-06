import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import { DashboardLayout } from "./layout/DashboardLayout";
import Location from "./locations/Location";

import { CircularProgress, CssBaseline, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Statistics from "./stats/statistics";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../actions/locations";
import Alerts from "./layout/Alerts";
import Login from "./account.js/Login";
import { loadUser } from "../actions/auth";
import PrivateRoute from "./common/PrivateRoute";

const HomePage = () => <DashboardLayout component={Statistics} />;
const LocationPage = () => <DashboardLayout component={Location} />;

function App() {
  const dispatch = useDispatch();
  const { auth, locations } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getLocations());
  }, [dispatch]);

  if (auth.isLoading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CircularProgress sx={{ top: "50%", position: "absolute" }} size={65} />
      </Box>
    );
  }
  console.log(locations);
  return (
    <Router>
      <Alerts />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/locations" element={<PrivateRoute />}>
            <Route path="/locations" element={<LocationPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
