import { ArrowBack, ContentCopy, Groups } from '@mui/icons-material';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/shared/components';
import { ROUTES } from '@/shared/constants';
import { content, page, panel, roomCode, status, title } from './styles';

const RoomPage = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams<{ id: string }>();

  const copyRoomCode = async () => {
    await navigator.clipboard?.writeText(id);
  };

  return (
    <Box sx={page}>
      <Box sx={content}>
        <IconButton
          aria-label="Back to lobby"
          onClick={() => navigate(ROUTES.HOME)}
          sx={{ alignSelf: 'flex-start', color: 'text.secondary' }}
        >
          <ArrowBack />
        </IconButton>

        <Box sx={panel}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Groups color="info" />
            <Typography sx={status}>Room created</Typography>
          </Box>
          <Typography component="h1" sx={title}>
            Waiting for an opponent
          </Typography>
          <Typography color="text.secondary">
            Share the room code with another player to start the battle.
          </Typography>
          <Box sx={roomCode}>
            <Typography>{id}</Typography>
            <Tooltip title="Copy code">
              <IconButton aria-label="Copy room code" onClick={copyRoomCode}>
                <ContentCopy fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Button variant="outlined" onClick={() => navigate(ROUTES.HOME)}>
            Back to lobby
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RoomPage;
