import express from "express";
import { createSale,getSales, getSalesByPeriod } from "../Controllers/SalesController.js";
// import { authMiddleware } from "../Middlware/auth.js";

const router = express.Router();

router.post("/sales", createSale);
router.get("/sales", getSales);
router.get("/sales/report", getSalesByPeriod);
//authMiddleware
export default router;