import { Mision } from "../models/Mision.js";
import { Usuario } from "../models/Usuario.js";

export const crearUsuario = async (usuario) => {

    // Validar que el correo no este registrado
    const existeEmail = await Usuario.findOne({ where: { email: usuario.email } });

    if (existeEmail) {
        throw new Error("El correo ya esta registrado")
    }

    // Validar que la identificacion no este registrada
    const existeIdentificacion = await Usuario.findOne({ where: { identificacion: usuario.identificacion } });

    if (existeIdentificacion) {
        throw new Error("La identificacion ya esta registrada")
    }

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