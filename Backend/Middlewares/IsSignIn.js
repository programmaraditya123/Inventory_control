const jwt = require("jsonwebtoken");

const IsSignIn = (req, res, next) => {
  let token = req.header("Authorization");
  console.log(token,"..");
  let tokenSecret = "";
  if (token.startsWith("Bearer ")) {
    tokenSecret = token.slice(7);
    //token = token.slice(7).trim();
  }
  //   const tokenSecret = token.split(" ")[1];

  console.log(tokenSecret,"......");
  if (tokenSecret??null ) {
    console.log("Invalid authorization");
    res.status(201).json({ status:"error",message: "Token is not present" });
    return;
  }

  //   if (token.startsWith("Bearer ")) {
  //     token = token.slice(7);
  //     //token = token.slice(7).trim();
  //   }
  //   console.log("Token after slicing", token);

  console.log("+++++++++",tokenSecret)

  try {
    const decode = jwt.verify(JSON.parse(tokenSecret), "aditya");
    console.log("1111111111111111111111",decode)
    //decode = req.user;
    req.user = decode;
    next();
  } catch (error) {
    console.log("error while verifying token ", error);
  }
};

module.exports = IsSignIn;
