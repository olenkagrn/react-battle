import { Add, ArrowForward } from '@mui/icons-material';
import { Box, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRoom, joinRoom } from '@/api/services/rooms/roomApi';
import { Button, FormInput } from '@/shared/components';
import { roomRoute } from '@/shared/constants/routes';
import {
  content,
  eyebrow,
  intro,
  joinForm,
  joinInput,
  page,
  panel,
  panelHeading,
  sectionLabel,
  subtitle,
  title,
} from './styles';

const HomePage = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState('');
  const [validationError, setValidationError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreateRoom = async () => {
    setIsSubmitting(true);
    const room = await createRoom();
    navigate(roomRoute(room.id));
  };

  const handleJoinRoom = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalizedCode = roomCode.trim();

    if (!normalizedCode) {
      setValidationError('Enter a room code');
      return;
    }

    setValidationError('');
    setIsSubmitting(true);
    const room = await joinRoom(normalizedCode);
    navigate(roomRoute(room.id));
  };

  return (
    <Box component="main" sx={page}>
      <Box sx={content}>
        <Box sx={intro}>
          <Typography sx={eyebrow}>React Battle</Typography>
          <Typography component="h1" sx={title}>
            Find your opponent
          </Typography>
          <Typography sx={subtitle}>
            Create a room for a new battle or join an existing one with a room code.
          </Typography>
        </Box>

        <Box component="section" sx={panel} aria-label="Room controls">
          <Typography component="h2" sx={panelHeading}>
            Lobby
          </Typography>
          <Typography sx={sectionLabel}>Start a game in seconds</Typography>
          <Button
            fullWidth
            variant="contained"
            startIcon={<Add />}
            disabled={isSubmitting}
            onClick={handleCreateRoom}
          >
            Create room
          </Button>

          <Divider />

          <Box component="form" sx={joinForm} onSubmit={handleJoinRoom} noValidate>
            <FormInput
              label="Room code"
              placeholder="For example, A7K9Q2"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
              error={Boolean(validationError)}
              helperText={validationError}
              sx={joinInput}
              slotProps={{ htmlInput: { maxLength: 6, 'aria-label': 'Room code' } }}
            />
            <Button
              type="submit"
              variant="outlined"
              disabled={isSubmitting}
              endIcon={<ArrowForward />}
            >
              Join room
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
