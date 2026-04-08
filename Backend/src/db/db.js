import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'datexco',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
)