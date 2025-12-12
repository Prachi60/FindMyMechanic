import Customer from "../models/customers.js";
import Provider from "../models/provider.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { handleResponse } from "../utils/handleResponse.js";


export const register = async (req, res) => {
  try {
    const { name, email, phone, password, role ,...rest} = req.body;

    
    if (!role) {
      return handleResponse(res, 400, "Role is required");
    }

    
    const emailExistsInCustomer = await Customer.findOne({ email });
    const emailExistsInProvider = await Provider.findOne({ email });

    if (emailExistsInCustomer ) {
      return handleResponse(res, 400, "Email already exists");
    }
        if (emailExistsInProvider ) {
      return handleResponse(res, 400, "Email already exists");
    }


    const phoneExistsInCustomer = await Customer.findOne({ phone });
    const phoneExistsInProvider = await Provider.findOne({ phone });

    if (phoneExistsInCustomer) {
      return handleResponse(res, 400, "Phone number already exists");
    }

    if (phoneExistsInProvider) {
      return handleResponse(res, 400, "Phone number already exists");
    }
   
    const hashedPassword = await bcrypt.hash(password, 10);

    let newUser;

   
    if (role === "customer") {
      newUser = new Customer({
        name,
        email,
        phone,
        password: hashedPassword,
        role,
      });
    } 
    
    else if (role === "provider") {
      newUser = new Provider({
        name,
        email,
        phone,
        password: hashedPassword,
        role,
        ...rest
      });
    }

    else {
      return handleResponse(res, 400, "Invalid role");
    }

    await newUser.save();

    return handleResponse(res, 201, "User registered successfully", newUser);

  } catch (error) {
    console.error("Register Error:", error.message);
    return handleResponse(res, 500, "Internal Server Error",{error:error.message});
  }
};






export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return handleResponse(res, 400, "Email, password, and role are required");
    }

    let user;

   
    if (role === "customer") {
      user = await Customer.findOne({ email });
    } 
    else if (role === "provider") {
      user = await Provider.findOne({ email });
    }
    else {
      return handleResponse(res, 400, "Invalid role");
    }

    if (!user) {
      return handleResponse(res, 404, "User not found");
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return handleResponse(res, 400, "Invalid password");
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return handleResponse(res, 200, "Login successful", {
      token,
      role: user.role,
      user
    });

  } catch (error) {
    console.error("Login Error:", error);
    return handleResponse(res, 500, "Internal Server Error", { error: error.message });
  }
};

// export const getProfile = async (req, res) => {
//   try {
//     const user = await Customer.findById(req.userId).select("-password");

//     if (!user) {
//       return handleResponse(res, 404, "User not found");
//     }

//     return handleResponse(res, 200, "Profile fetched successfully", user);
//   } catch (error) {
//     console.error("Get Profile Error:", error);
//     return handleResponse(res, 500, "Internal Server Error");
//   }
// };

export const getProfile = async (req, res) => {
  try {
    let user;

   
    if (req.role === "customer") {
      user = await Customer.findById(req.id).select("-password");
    } 
    else if (req.role === "provider") {
      user = await Provider.findById(req.id).select("-password");
    } 
    else {
      return handleResponse(res, 400, "Invalid role");
    }

    if (!user) {
      return handleResponse(res, 404, "User not found");
    }

    return handleResponse(res, 200, "Profile fetched successfully", user);

  } catch (error) {
    console.error("Get Profile Error:", error);
    return handleResponse(res, 500, "Internal Server Error", { error: error.message });
  }
};
