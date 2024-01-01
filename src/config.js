// revisa si hay una variable de entorno para PORT y en caso contrario le asignamos el puerto 3000
export const PORT = process.env.PORT || 3000

//Lo mismo para la base de datos
export const DB_HOST = process.env.DB_HOST || '192.168.1.33'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'armando_123'
export const DB_NAME = process.env.DB_NAME || 'usersdb'
export const DB_PORT = process.env.DB_PORT || 11004


