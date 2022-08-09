import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function BasicButtons({serieId}) {
  const navigate = useNavigate();

  return (
    <Stack spacing={10} direction="row">
      <Button onClick={() => navigate(`/serie/${serieId}`)}variant="contained">Assistir</Button>
    </Stack>
  );
}
