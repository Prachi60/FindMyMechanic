import express from "express";
import { createBooking, getProviderBookings, updateBookingStatus, getBookingById } from "../controllers/booking.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createBooking);
router.get("/provider", authMiddleware, getProviderBookings);
router.get("/:id", authMiddleware, getBookingById);
router.put("/:id/status", authMiddleware, updateBookingStatus);

export default router;
