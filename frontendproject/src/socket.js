
import { io } from "socket.io-client";

const token = localStorage.getItem("token");

const SOCKET_API = import.meta.env.VITE_SOCKET_API_URL
const socket = io(SOCKET_API, {
  withCredentials: true,
  transports: ["websocket", "polling"],
  auth: { token },  // ✅ Use auth instead of extraHeaders
});

export default socket;
