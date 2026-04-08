import { DataTypes } from "sequelize"
import { sequelize } from "../db/db.js"

export const Mision = sequelize.define('Misiones', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    mensaje_invitacion: {
        type: DataTypes.TEXT,
    },
    fecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false

    },
}, {
            timestamps: false
})