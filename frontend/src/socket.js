import { io } from 'socket.io-client';

// Connect to the backend socket server using the namespace
const socket = io("http://bookmydoctor2-production.up.railway.app"); // Replace with your production URL

socket.on('connect', () => {
  console.log('Connected to /bookmydoctor.doctors');
});

// Emit an event as an example
socket.emit('some-event', { message: 'Hello from frontend!' });

export default socket;
