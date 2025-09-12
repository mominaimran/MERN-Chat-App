# 💬 MERN Chat App  
A real-time and modern **MERN Stack Chat Application** with seamless messaging, user authentication, and live updates powered by **Socket.io**.  

🚀 **Live Demo:** [MERN Chat App](https://mern-chat-app-nine-silk.vercel.app/)
💻 **Backend API:** [Railway Deployment](https://mern-chat-app-production-f2c9.up.railway.app)  
(⚠️ Note: This is a REST + WebSocket API, so opening the link directly may not show UI. Try endpoints like `/health`.)  

---

## ✨ Features  
- 🔐 **User Authentication** (JWT + Cookies)  
- 👥 **1-to-1 & Group Chats**  
- ⚡ **Real-Time Messaging with Socket.io**  
- 📤 **Send Text, Emojis, Media**  
- 📅 **Chat History & Timestamps**  
- 📊 **Online/Offline User Status**  
- 🎨 **Clean & Responsive UI (React + Tailwind)**  

---

## 🛠️ Tech Stack  
- **Frontend:** React, TailwindCSS  
- **Backend:** Node.js, Express.js, Socket.io  
- **Database:** MongoDB, Mongoose  
- **Deployment:** Vercel (Frontend), Railway (Backend)  

---

## 🚀 Getting Started  

### 🔑 Prerequisites  
- Node.js v18+ (for running both client & server)  
- MongoDB Atlas account OR Local MongoDB setup  
- Git (to clone and manage the repository)  
- A package manager: `npm` or `yarn`  

---

### ⚙️ Installation  

```bash
# Clone the repo
git clone https://github.com/mominaimran/MERN_Chat_App.git

# Navigate into project directory
cd MERN_Chat_App

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```
### Environment Variables
Create a `.env` file in the **backend** folder with:

```bash
PORT=5001
MONGODB_URL=your-mongodb-uri
SALT_ROUNDS=10
JWT_SECRET=your-jwt-secret
NODE_ENV=development
CLIENT_URL=https://your-frontend-url.com
```
For frontend:
```bash
VITE_API_URL=https://your-backend-api.com/api
```

### Running the App

```bash
# Start backend server first
cd backend
npm run dev

# Open a new terminal and start frontend
cd frontend
npm run dev
```
---

## 👩‍💻 Author
Developed with ❤️ by [Momina Imran](https://your-portfolio-link.com)
