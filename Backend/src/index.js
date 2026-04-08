import express from 'express'
import { sequelize } from './db/db.js'

import aiRoutes from './routes/aiRoutes.js'
import usuarioRoutes from './routes/usuarioRoutes.js'
import misionRoutes from './routes/misionRoutes.js'

import './models/Usuario.js'
import './models/Mision.js'

import { PORT } from '../config.js'

const app = express()
app.use(express.json())

// Crear las rutas
app.use(usuarioRoutes)
app.use(misionRoutes)
app.use(aiRoutes)

async function main() {

    try {

        await sequelize.authenticate()
        await sequelize.sync()
        console.log("Conexion a la base datos exitosa")
        app.listen(PORT)

    } catch (error) {
        console.log("Error", error)
    }

}

main()
