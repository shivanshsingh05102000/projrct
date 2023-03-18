const jwt = require("jsonwebtoken");
const { ErrorObj } = require("./handleErrorMiddleware");
const User = require("./Models/User");



const jwtValidator =  async (req, res, next) => {
    const accesToken = req.cookies && req.cookies.jwt;
    if(!accesToken) {
        res.clearCookie("jwt").clearCookie("userId")
        const errObj = new ErrorObj(401, "your login session expired pls login again");
        return next(errObj)
    }

    jwt.verify(accesToken, process.env.JWT_SECRET, async(err, decoded) => {
        if(decoded) {
            req.user = {...decoded};
            return next();
        }
        else if(err && err.name === "TokenExpiredError"){
            const decode = jwt.decode(accesToken) ;
            const user =  await User.findByemail(decode.email);
            
            if (user && user.refreshToken){
                const jwtPayload = {
                    name: user.name,
                    email: user.email,
                  };
                try {
                    await jwt.verify(user.refreshToken, process.env.REFRESH_TOKEN_SECRET);
                    const newToken = accessTokenGenerator(jwtPayload);
                    res.cookie("jwt", newToken, {  httpOnly: true, maxAge: 86400 }).cookie("UserEmail", `${user.email}`, {  httpOnly: true, maxAge: 86400});
                    req.user = {...jwtPayload};
                    return next()
                } catch (err){
                    res.clearCookie("jwt").clearCookie("userId")
                    return next({...err, status: 403})
                }

            }
        } else {
            res.clearCookie("jwt").clearCookie("userId")
            console.log("jwt error", err)
            return next({...err, status: 403})
        }
    })
}


 const accessTokenGenerator = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 120});
}

 const refreshTokenGenerator = (payload) => {
    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: 86400});
}

module.exports = {refreshTokenGenerator, accessTokenGenerator, jwtValidator}