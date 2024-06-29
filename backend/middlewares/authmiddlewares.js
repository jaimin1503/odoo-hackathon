import jwt from "jsonwebtoken";
import User from "../models/user.js";

const protectRoute = async (req, res, next) => {
  try {
    let token = req.cookies?.token;
    if (token) {
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("inside middlewares and decoded token is", decodedToken);
      const resp = await User.findById(decodedToken.userid).select(
        "isAdmin email"
      );
      console.log("resp", resp);

      req.user = {
        email: res.email,
        isAdmin: res.isAdmin,
        userId: decodedToken.userid,
      };

      next();
    } else {
      console.log("1");
      return res
        .status(401)
        .json({ status: false, message: "Not authorized. Try login again." });
    }
  } catch (error) {
    console.error(error);
    return res
      .status(401)
      .json({ status: false, message: "Not authorized. Try login again." });
  }
};

const isAdminRoute = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    return res.status(401).json({
      status: false,
      message: "Not authorized as admin. Try login as admin.",
    });
  }
};

export { isAdminRoute, protectRoute };
