import { Router } from "express";
import misionController from "../controllers/misionController.js";

const router = Router();

router.post("/misiones", misionController.createMision);

export default router;