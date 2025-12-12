import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Customer from "../models/customers.js";
import Provider from "../models/provider.js";
import { handleResponse } from "../utils/handleResponse.js";

dotenv.config();

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return handleResponse(res, 401, "No token, authorization denied");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    let user;

    // Check role and find in correct collection
    if (decoded.role === "customer") {
      user = await Customer.findById(decoded.userId);
    } else if (decoded.role === "provider") {
      user = await Provider.findById(decoded.userId);
    } else {
      return handleResponse(res, 400, "Invalid role in token");
    }

    if (!user) {
      return handleResponse(res, 404, "User Not Found");
    }

    // Attach user info to request
    req.user = user;
    req.id = decoded.userId;
    req.role = decoded.role;

    next();

  } catch (err) {
    console.error("Auth Error:", err);
    return handleResponse(res, 401, "Token is not valid");
  }
};

export default authMiddleware;
