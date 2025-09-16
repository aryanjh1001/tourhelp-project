"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupWebSocket = void 0;
const auth_1 = require("../middleware/auth");
const setupWebSocket = (io) => {
    io.use(async (socket, next) => {
        try {
            const token = socket.handshake.auth.token;
            if (!token) {
                return next(new Error('Authentication token required'));
            }
            const decoded = (0, auth_1.verifyToken)(token);
            if (!decoded) {
                return next(new Error('Invalid token'));
            }
            socket.data.user = decoded;
            next();
        }
        catch (error) {
            next(new Error('Authentication failed'));
        }
    });
    io.on('connection', (socket) => {
        const user = socket.data.user;
        console.log(`User ${user.email} connected via WebSocket`);
        socket.join(user.userType.toLowerCase());
        socket.join(`user_${user.userId}`);
        socket.on('location-update', (data) => {
            console.log(`Location update from ${user.email}:`, data);
            if (data.isEmergency) {
                socket.to('police').to('admin').emit('emergency-location', {
                    userId: user.userId,
                    email: user.email,
                    location: data
                });
            }
        });
        socket.on('emergency-alert', (data) => {
            console.log(`Emergency alert from ${user.email}:`, data);
            socket.to('police').to('admin').emit('emergency-alert', {
                userId: user.userId,
                email: user.email,
                alert: data,
                timestamp: new Date()
            });
        });
        socket.on('disconnect', () => {
            console.log(`User ${user.email} disconnected`);
        });
    });
    return io;
};
exports.setupWebSocket = setupWebSocket;
//# sourceMappingURL=websocket.js.map