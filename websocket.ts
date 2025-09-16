import { Server } from 'socket.io';
import { verifyToken } from '../middleware/auth';

export const setupWebSocket = (io: Server) => {
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;

      if (!token) {
        return next(new Error('Authentication token required'));
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        return next(new Error('Invalid token'));
      }

      socket.data.user = decoded;
      next();
    } catch (error) {
      next(new Error('Authentication failed'));
    }
  });

  io.on('connection', (socket) => {
    const user = socket.data.user;
    console.log(`User ${user.email} connected via WebSocket`);

    // Join user to their specific room based on user type
    socket.join(user.userType.toLowerCase());
    socket.join(`user_${user.userId}`);

    // Handle location updates
    socket.on('location-update', (data) => {
      console.log(`Location update from ${user.email}:`, data);

      // Broadcast to police/admin if it's an emergency
      if (data.isEmergency) {
        socket.to('police').to('admin').emit('emergency-location', {
          userId: user.userId,
          email: user.email,
          location: data
        });
      }
    });

    // Handle emergency alerts
    socket.on('emergency-alert', (data) => {
      console.log(`Emergency alert from ${user.email}:`, data);

      // Broadcast to all police and admin users
      socket.to('police').to('admin').emit('emergency-alert', {
        userId: user.userId,
        email: user.email,
        alert: data,
        timestamp: new Date()
      });
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      console.log(`User ${user.email} disconnected`);
    });
  });

  return io;
};