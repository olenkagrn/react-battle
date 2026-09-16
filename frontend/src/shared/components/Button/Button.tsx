import { Button as MuiButton, type ButtonProps } from '@mui/material';
import { button } from './styles';

const Button = (props: ButtonProps) => <MuiButton {...props} sx={button} />;

export default Button;
