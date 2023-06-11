import { sign, verify } from "jsonwebtoken";
// require("dotenv").config();

const createTokens = (user) => {
  const accessToken = sign(
    {
      userName: user[0][0].userName,
      id: user[0][0].userID,
    },
    process.env.JWTSECRET
  );
  return accessToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    return res.status(400).json({ error: "User not Authenticated!" });
  } else {
    try {
      const validToken = verify(accessToken, process.env.JWTSECRET);
      if (validToken) {
        req.authenticated = true;
        // console.log(`token ${validToken}`);
        // console.log(validToken);
        // console.log(accessToken);
        return next();
      }
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
};

module.exports = { createTokens, validateToken };
