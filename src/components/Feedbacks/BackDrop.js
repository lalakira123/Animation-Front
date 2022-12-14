import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function BackDrop(){
  return(
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
      <CircularProgress color="primary" />
    </Backdrop>
  )
}

export default BackDrop;