
import userModel from "../model/userModel.js";


const userdata = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new userModel(user);
    const data = await newUser.save(); // ✅ Use await
    res.status(201).json({ success: true, message: "User added successfully", data });
  } catch (error) {
    console.error(error); // ✅ Log error for debugging
    res.status(500).json({ success: false, message: "Failed to add user", error: error.message });
  }
};

export default userdata;
