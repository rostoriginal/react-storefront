import React from "react";
import { TextField, Grid } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            variant="standard"
            required={required}
          />
        )}
        control={control}
        name={name}
      />
    </Grid>
  );
};

export default FormInput;
