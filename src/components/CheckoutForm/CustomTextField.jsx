import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  const isError = false

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue = {''}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            variant="standard"
            required={required}
            error={isError}
          />
        )}
        control={control}
        name={name}
      />
    </Grid>
  );
};

export default FormInput;
