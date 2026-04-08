import { Mision } from "../models/Mision.js";
import usuarioService from "../services/usuarioService.js";

const crearMision = async (mision) => {
    
    const usuario = await usuarioService.obtenerUsuarioPorId(mision.usuario_id)

    if (!usuario) {
        throw new Error("Usuario no encontrado")
    }

    const nuevaMision = await Mision.create(mision)
    return nuevaMision

}

const misionService = {
    crearMision
}

export default misionService