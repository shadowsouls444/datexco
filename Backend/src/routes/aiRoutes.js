import { Router } from "express";
import aiController from "../controllers/aiController.js";

const router = Router();

router.post("/ai", aiController.generateResponse);

export default router;