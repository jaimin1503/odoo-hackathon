import jwt from "jsonwebtoken";

export const createJWT = async (res, user) => {
  try {
    const payload = {
      userid: user._id,
      email: user.email,
      username: user.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    console.log("inside create jwt and token is",token)
    // const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    //   expiresIn: "15d",
    // });
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: "none"
    };
    res.cookie("token", token, options);
    res.set("Authorization", `Bearer ${token}`);
  } catch (error) {
    console.error("Error generating JWT token:", error);
    // Handle the error appropriately, such as returning an error response to the client
  }
};
