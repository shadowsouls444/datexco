import { Router } from "express";
import misionController from "../controllers/misionController.js";

const router = Router();

router.get("/misiones", misionController.getMisiones);
router.post("/misiones", misionController.createMision);
router.patch("/misiones/:id", misionController.asignateMision);

export default router;