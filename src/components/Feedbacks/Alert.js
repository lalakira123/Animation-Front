import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const AlertFeedback = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Alert({alert}){
  const { message, isOpen, kind, update } = alert;
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [update]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return(
    <Snackbar 
      open={open} 
      autoHideDuration={5000} 
      onClose={handleClose} 
      anchorOrigin={{vertical:'top',horizontal:'right'}}
      >
      <AlertFeedback onClose={handleClose} severity={kind} sx={{ width: '100%' }}>
        {message}
      </AlertFeedback>
    </Snackbar>
  );
}

export default Alert;