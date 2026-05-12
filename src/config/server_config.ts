
export const SERVER_CONFIG = {
    PORT: Number (process.env.PORT) || 3000,
    idleTimeout: 30, // Tiempo de espera para conexiones inactivas (en milisegundos)
    path: "/socket.io/", // Ruta para la conexión de Socket.IO
} as const;