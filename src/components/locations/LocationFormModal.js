import React, { useState } from "react";
import {
  Modal,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Infos, Others, Population, Project } from "./Forms";

const style = {
  position: "absolute",
  top: "50%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const LocationFormModal = (props) => {
  const {
    open,
    handleClose,
    handleSubmit,
    handleChange,
    values,
    state,
    setState,
  } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {state ? "Locatlité " : "Enregistrer une localité"} :{" "}
            {values.community_name}
          </Typography>

          <FormStepper
            state={state}
            setState={setState}
            values={values}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

const steps = ["Infos generales", "Projet", "Population", "Autres Infos"];

const FormStepper = (props) => {
  const { values, handleChange, handleSubmit, state, setState, handleClose } =
    props;
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            La Localité a été correctement enregistré
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            {activeStep === 0 && (
              <Infos
                handleChange={handleChange}
                values={values}
                state={state}
              />
            )}
            {activeStep === 1 && (
              <Project
                handleChange={handleChange}
                values={values}
                state={state}
              />
            )}
            {activeStep === 2 && (
              <Population
                handleChange={handleChange}
                values={values}
                state={state}
              />
            )}
            {activeStep === 3 && (
              <Others
                handleChange={handleChange}
                values={values}
                state={state}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Précedent
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {state && (
              <Button
                color="inherit"
                onClick={() => setState(false)}
                sx={{ mr: 1 }}
              >
                Modifier
              </Button>
            )}

            <Button
              onClick={
                activeStep === steps.length - 1
                  ? state
                    ? () => handleClose()
                    : () => handleSubmit(values)
                  : handleNext
              }
            >
              {activeStep === steps.length - 1 ?  state? "Fermer" : "Enregister" : "Suivant"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
