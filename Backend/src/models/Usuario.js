import { DataTypes } from "sequelize"
import { sequelize } from "../db/db.js"
import { Mision } from "./Mision.js"

export const Usuario = sequelize.define('Usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(90),
        allowNull: false,
        unique: true
    },
    telefono: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    identificacion: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }, 
}, {
    timestamps: false
})

// Relacion de uno a muchos entre Usuario y Mision
Usuario.hasMany(Mision, { foreignKey: 'usuario_id', sourceKey: 'id' })
Mision.belongsTo(Usuario, { foreignKey: 'usuario_id', targetKey: 'id' })