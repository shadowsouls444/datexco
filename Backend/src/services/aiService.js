import axios from 'axios'
import { readFile } from 'fs/promises';

import { API_KEY_IA } from '../../config.js'

// Leer los prompts desde archivos de texto
const prompt_general = await readFile('./src/assets/prompts/prompt_general.txt', 'utf-8');
const prompt_invitacion = await readFile('./src/assets/prompts/prompt_invitacion.txt', 'utf-8');
const prompt_descripcion = await readFile('./src/assets/prompts/prompt_descripcion.txt', 'utf-8');

const generarRespuesta = async ({ texto, tipo }) => {

    let promptEspecifico = '';

    if(!["invitacion", "descripcion"].includes(tipo)) {
        throw new Error('Tipo no valido');
    }

    if (tipo === 'invitacion') {
        promptEspecifico = prompt_invitacion
    } else {
        promptEspecifico = prompt_descripcion
    }

    // Unir en un solo prompt el general, el específico y el texto del usuario
    const promptCompleto = `${prompt_general}\n${promptEspecifico}\nUsuario: ${texto}\nIA:`

    try {

        const response = await axios({
            method: 'POST',
            url: `https://api.mistral.ai/v1/chat/completions`,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${API_KEY_IA}`
            },
            data: {
                model: "mistral-medium-latest",
                messages: [
                    { role: "system", content: promptCompleto }
                ]
            }
        })

        // Obtener la respuesta generada
        const mensaje_IA = response.data.choices[0].message.content

        return mensaje_IA

    } catch (error) {
        throw new Error('Error al generar la respuesta');
    }

}

const aiService = {
    generarRespuesta
}

export default aiService
