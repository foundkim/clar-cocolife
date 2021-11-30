import { Card, CardContent, Grid, Typography } from "@mui/material";

export const Stat1 = (props) => {
  const { pop, count, partner } = props;
  return (
    <Card {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              {partner}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {count}{" "}
              <Typography color="textPrimary" variant="caption">
                Localités
              </Typography>
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {Math.round(pop/count)}{" "}
              <Typography color="textPrimary" variant="caption">
                habitants moyens / Localité
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
