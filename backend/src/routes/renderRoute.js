import express from "express";
const router = express.Router();
import { upload } from "../services/renderService.js";

router.post("/", upload);

export default router;
