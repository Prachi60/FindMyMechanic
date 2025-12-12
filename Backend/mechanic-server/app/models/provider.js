import mongoose from "mongoose";

const providerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "provider" },

  // Provider-specific fields
  serviceType: { type: String, required: true },
  experience: { type: Number, required: true },
  workshopAddress: { type: String },
  availability: { type: Boolean, default: true }
});

export default mongoose.model("Provider", providerSchema);
