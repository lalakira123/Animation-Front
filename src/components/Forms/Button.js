import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function ButtonForm({text, loading}){
  return(
    <Button 
      type='submit' 
      variant="contained" 
      fullWidth
      disabled={loading}
      >
      {
        loading ? <CircularProgress color="primary" /> : text
      }
    </Button>
  );
}

export default ButtonForm;