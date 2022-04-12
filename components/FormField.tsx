import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();

  return (
    <TextField
      {...register(name)}
      name={name}
      className="mb-20"
      label={label}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message}
      fullWidth
    />
  );
};

export default FormField;
