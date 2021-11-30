import { Box, Container, Grid } from "@mui/material";
import { DataFrame } from "pandas-js";
import { Stat1 } from "./stat1";
import { Stat2 } from "./stat2";
import { Stat3 } from "./stat3";
import { Stat4 } from "./stat4";
import { Stat5 } from "./stat5";
import { Sales } from "./sales";
import { useSelector } from "react-redux";

const partners = ["ONG 2A", "ISTRADEV", "GFM3", "TRUST"];
const Statistics = () => {
  const { locations } = useSelector((state) => ({ ...state.locations }));

  const filterPartner = (partner) =>
    locations.filter((location) => location.impl_partner === partner);

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
          <Grid container spacing={3}>
            {partners.map((partner) => (
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <Stat1
                  partner={partner}
                  count={filterPartner(partner).length}
                  pop={filterPartner(partner).reduce(
                    (accumulator, current) =>
                      accumulator + current.population,
                    0
                  )}
                />
              </Grid>
            ))}
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <Stat5 sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Statistics;
