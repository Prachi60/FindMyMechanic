import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "Provider" }, // Can be null initially if broadcasting
    vehicleType: { type: String, required: true }, // '2-wheeler', '4-wheeler', etc.
    problemDescription: { type: String },
    quizResults: { type: Array }, // Store Q&A pairs
    images: [{ type: String }],
    status: {
        type: String,
        enum: ["pending", "accepted", "completed", "cancelled"],
        default: "pending"
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], index: '2dsphere' }
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
