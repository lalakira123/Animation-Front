import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

function Input({label, signUp, setSignUp, type}){
  return(
    <>
      <CssTextField 
        fullWidth label={label} 
        variant="outlined" 
        margin='normal'
        onChange={(e) => setSignUp({...signUp, [type]: e.target.value})}
        required
        />
    </>
  );
}

export default Input;

const CssTextField = styled(TextField)({
  input: {
    color: 'white'
  },
  label: {
    color: '#777576'
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: '#1565C0',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary',
    },
  },
});