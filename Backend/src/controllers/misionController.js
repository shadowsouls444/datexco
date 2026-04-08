import misionService from "../services/misionService.js";

const createMision = async (req, res) => {
    try {
        const { titulo, descripcion, mensaje_invitacion, usuario_id } = req.body;

        const mision = await misionService.crearMision({
            titulo,
            descripcion,
            mensaje_invitacion,
            usuario_id
        });

        return res.status(201).json(mision);

    } catch (error) {

        if (error.message === "Usuario no encontrado") {
            return res.status(404).json({ error: error.message });
        }

        return res.status(500).json({ error: 'Ocurrió un error inesperado' });
    }
};

const misionController = {
    createMision
};

export default misionController;