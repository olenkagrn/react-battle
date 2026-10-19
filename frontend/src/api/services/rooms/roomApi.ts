export type Room = {
  id: string;
};

const ROOM_CODE_LENGTH = 6;
const ROOM_CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

const createLocalRoomCode = () =>
  Array.from({ length: ROOM_CODE_LENGTH }, () =>
    ROOM_CODE_ALPHABET.charAt(Math.floor(Math.random() * ROOM_CODE_ALPHABET.length)),
  ).join('');

/**
 * Temporary local implementation. Replace the function body with POST /rooms
 * when the rooms API is available.
 */
export const createRoom = async (): Promise<Room> => ({ id: createLocalRoomCode() });

/**
 * Temporary local implementation. Replace the function body with a room lookup
 * and join request when the rooms API is available.
 */
export const joinRoom = async (roomId: string): Promise<Room> => ({
  id: roomId.trim().toUpperCase(),
});
