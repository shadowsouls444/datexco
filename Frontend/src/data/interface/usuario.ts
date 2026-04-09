import { Mision } from "./mision";

export interface Usuario {

    id?: number,
    nombre: string,
    telefono: string,
    email: string,
    identificacion: string,
    misiones?: Mision[],

}
