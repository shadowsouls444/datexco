import { Router } from "express";
import usuarioController from "../controllers/usuarioController.js";

const router = Router();

router.get("/usuarios", usuarioController.getUsuarios);
router.post("/usuarios", usuarioController.createUsuario);

export default router;