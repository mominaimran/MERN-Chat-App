import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);
const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];

const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    credentials: true
  }
});

export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

const userSocketMap = {};   

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId;
    if (userId) userSocketMap[userId] = socket.id;
    console.log(`User connected: ${socket.id}`);
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    
    socket.on("disconnect", () => {
        delete userSocketMap[userId];
        console.log(`User disconnected: ${socket.id}`);
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    })
})

export {io, server, app};