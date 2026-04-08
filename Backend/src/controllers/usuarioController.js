import usuarioService from "../services/usuarioService.js";

const createUsuario = async (req, res) => {

    try {
        const { nombre, email, telefono, identificacion } = req.body;

        const usuario = await usuarioService.crearUsuario({
            nombre,
            email,
            telefono,
            identificacion
        });

        return res.status(201).json(usuario);

    } catch (error) {
  
        return res.status(500).json({ error: 'Ocurrió un error inesperado' });
    }

};

const getUsuarios = async (req, res) => {
    
    try {

        const usuarios = await usuarioService.obtenerUsuarios()
        return res.status(200).json(usuarios);

    } catch (error) {
  
        return res.status(500).json({ error: 'Ocurrió un error inesperado' });
    }

};

const usuarioController = {
    createUsuario,
    getUsuarios
};

export default usuarioController;