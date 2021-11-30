import { useState } from "react";
import { useDispatch } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Button,
  TablePagination,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { deleteLocation } from "../../actions/locations";

export const LocationListResults = ({
  locations,
  handleView,
  ...rest
}) => {

  const dispatch = useDispatch();

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


  
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">#</TableCell>
                <TableCell>Identifiant</TableCell>
                <TableCell>Communauté</TableCell>
                <TableCell>Pays</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Sous-prefecture</TableCell>
                <TableCell>Details</TableCell>
                <TableCell>Supprimer</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locations
                .slice(page * limit, page * limit + limit)
                .map((location, key) => (
                  <TableRow
                    hover
                    key={location.id}
                  >
                    <TableCell padding="checkbox">{++key}</TableCell>
                    <TableCell>{location.id}</TableCell>
                    <TableCell>{location.community_name}</TableCell>
                    <TableCell>{location.country}</TableCell>
                    <TableCell>{location.region}</TableCell>
                    <TableCell>{location.district}</TableCell>
                    <TableCell>{location.sub_prefecture}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<InfoIcon />}
                        onClick={() => {
                          handleView(location.id);
                        }}
                      ></Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        onClick={() => dispatch(deleteLocation(location.id))}
                      ></Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={locations.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

LocationListResults.propTypes = {
  locations: PropTypes.array.isRequired,
};
