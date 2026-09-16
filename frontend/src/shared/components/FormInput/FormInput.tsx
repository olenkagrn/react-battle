import { TextField, type TextFieldProps } from '@mui/material';
import { formInput } from './styles';

const FormInput = (props: TextFieldProps) => (
  <TextField
    {...props}
    fullWidth
    variant="outlined"
    slotProps={{
      inputLabel: { shrink: true },
      input: { notched: false },
    }}
    sx={formInput}
  />
);

export default FormInput;
