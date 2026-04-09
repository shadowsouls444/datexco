import { Mision } from "../models/Mision.js";
import { Usuario } from "../models/Usuario.js";
import usuarioService from "../services/usuarioService.js";

const crearMision = async (mision) => {
    const nuevaMision = await Mision.create(mision)
    return nuevaMision
}

const getMisiones = async () => {
    const misiones = await Mision.findAll({ include: [{ model: Usuario, as: "Usuario" }] })
    return misiones
}

const asignarMision = async (id, usuario_id) => {

    const mision = await Mision.findByPk(id)

    if(!mision) {
        throw new Error("Mision no encontrada")
    }

    const usuario = await usuarioService.obtenerUsuarioPorId(usuario_id)

    if(!usuario) {
        throw new Error("Usuario no encontrado")
    }

    mision.usuario_id = usuario_id
    await mision.save()

    return mision;

}

const misionService = {
    crearMision,
    getMisiones,
    asignarMision
}

export default misionService