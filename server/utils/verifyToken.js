import jwt from "jsonwebtoken";
export const createToken = async (id) => {
  const accessToken = jwt.sign({ id }, process.env.SECRET);
  return accessToken;
};
export const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: "Authorization header missing" });
  }
  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
