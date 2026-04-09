export interface IARequest {
    texto: string;
    tipo: "mensaje_invitacion" | "descripcion";
}

export interface IAResponse {
    respuesta: string;
}

