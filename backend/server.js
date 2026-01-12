const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket'); // Import Socket.IO initialization

const server = http.createServer(app);

initializeSocket(server); // Initialize Socket.IO

const PORT = process.env.PORT || 4000; // Ensure port matches .env file

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

