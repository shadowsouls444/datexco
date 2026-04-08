import aiService from "../services/aiService.js";

const generateResponse = async (req, res) => {
    try {
        const { texto, tipo } = req.body;

        const respuesta = await aiService.generarRespuesta({ texto, tipo });

        return res.status(200).json({ respuesta });

    } catch (error) {
        return res.status(500).json({ error: 'Ocurrió un error inesperado' });
    }
};

const aiController = {
    generateResponse
};

export default aiController;