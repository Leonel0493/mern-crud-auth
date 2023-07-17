import 'dotenv/config'

// * export the port number if not exist in the enviroment use 3000 by default
export const PORT = process.env.PORT_FOR_MERN_AUTH || 3000

// * export mongoose connection string
export const CONNECTION_STIRNG = 'mongodb://localhost/merndb'