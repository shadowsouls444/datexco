import { Mision } from "../models/Mision.js";
import { Usuario } from "../models/Usuario.js";

export const crearUsuario = async (usuario) => {
       await Usuario.create(usuario)
}

export const obtenerUsuarios = async () => {
    const usuarios = await Usuario.findAll({ include: [{ model: Mision, as: "Misiones" }] })
    return usuarios
}

export const obtenerUsuarioPorId = async (id) => {
    const usuario = await Usuario.findByPk(id, { include: [{ model: Mision, as: "Misiones" }] })
    return usuario
}

const usuarioService = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId
}

export default usuarioService