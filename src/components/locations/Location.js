import { useState, useReducer, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert, withAlert } from "react-alert";
import axios from "axios";
import { Box, Container } from "@mui/material";
import { LocationListResults } from "./LocationListResults";
import { LocationListToolbar } from "./LocationListToolbar";
import { LocationFormModal } from "./LocationFormModal";
import {
  getLocations,
  addLocation,
  updateLocation,
  deleteLocation,
} from "../../actions/locations";

const baseURL = "http://127.0.0.1:8000";

const Locations = ({ alert }) => {
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => ({ ...state.locations }));

  const initialState = {
    id: "",
    country: "",
    region: "",
    district: "",
    community_name: "",
    lattitude: "",
    longitude: "",
    sub_prefecture: "",
    terroir: "",
    ngo: "",
    impl_partner: "",
    cocoa_suppliers: "",
    cooperative: "",
    households: 0,
    men: 0,
    women: 0,
    population: "",
    cpe_2019: "",
    project_clmrs_2020_bc: "",
    project_clmrs_2020_core: "",
    cpe_2020: "",
    cpe_total_2020: "",
    cpe_replicat_2020: "",
    cpe_target_2021: "",
    cpe_total_expected_2021: "",
    clmrs_target_2021: "",
    clmrs_total_2021: "",
    observed_cases: 0,
    remediation_2021: 0,
    elaborated_pac: "",
    pac_elaboration_year: 0,
    actived_pac: "",
    created_codec_cdcom: "",
    location_status: "",
    actived_codec_cdcom: "",
    started_pac_projects: 0,
    done_pac_projects: 0,
    first_investment_year: 0,
    investment_amount: 0,
    created_avec: 0,
    members_of_participant_community_avec: 0,
    formalized_avec: 0,
    avec_imf: 0,
    created_agr: 0,
    people_with_agr: 0,
    restored_forest: 0,
    total_area_of_restored_forest: 0,
    stored_forest: 0,
    total_area_of_stored_forest: 0,
    introduced_species: 0,
    improved_stoves_built_before_2021: 0,
    improved_stoves_built_in_pilot_project: 0,
    improved_stoves_built_outside_project: 0,
    af_producers: 0,
    af_plot_hectare: 0,
    status: 0,
    keyword: "",
  };
  const [values, setValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const handleSubmit = (values) => {
    const id = values.id;
    if (locations.findIndex((location) => location.id === id) !== -1) {
      dispatch(updateLocation(id, values));
    } else {
      dispatch(addLocation(values));
    }
  };

  const handleChange = (event) => {
    setValues({ [event.target.name]: event.target.value });
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setValues(initialState);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [state, setState] = useState(true);
  const [view, setView] = useState(false);

  const handleView = (id) => {
    const location = locations.find((location) => location.id === id);
    setValues(location);
    setView(true);
  };

  const handleUnView = () => {
    setState(true);
    setView(false);
  };
  const dynamicSearch = (locations) => {
    const { keyword } = values;
    return keyword
      ? locations.filter(
          (location) =>
            (location.id &&
              location.id.toLowerCase().includes(keyword.toLowerCase())) ||
            (location.region &&
              location.region.toLowerCase().includes(keyword.toLowerCase())) ||
            (location.district &&
              location.district
                .toLowerCase()
                .includes(keyword.toLowerCase())) ||
            (location.region &&
              location.region.toLowerCase().includes(keyword.toLowerCase())) ||
            (location.community_name &&
              location.community_name
                .toLowerCase()
                .includes(keyword.toLowerCase()))
        )
      : locations;
  };

  const displayedLocations = dynamicSearch(locations);
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <LocationListToolbar
            handleOpen={handleOpen}
            handleChange={handleChange}
            keyword={values.keyword}
          />
          <Box sx={{ mt: 3 }}>
            <LocationListResults
              locations={displayedLocations}
              handleView={handleView}
              deleteLocation={deleteLocation}
            />
          </Box>
          <LocationFormModal
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            open={open}
            handleClose={handleClose}
          />
          <LocationFormModal
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            open={view}
            handleClose={handleUnView}
            state={state}
            setState={setState}
          />
        </Container>
      </Box>
    </>
  );
};

export default Locations;
