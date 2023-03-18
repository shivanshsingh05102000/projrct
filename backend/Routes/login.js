const { Router } = require("express");
const User = require("../Models/User");
const route = Router();
const bcrypt = require("bcryptjs");
const { SuccessObj } = require("./responseMethod");

const {
    accessTokenGenerator,
    refreshTokenGenerator,
    jwtValidator,
} = require("../jwtValidator");
const { ErrorObj } = require("../handleErrorMiddleware");

route.get("/profile",jwtValidator,async(req,res,next)=>{
    try {
        const user = await User.findOne({email});
        const data = new SuccessObj();
    
        data.payload = {
          user: user.toJSON(),
        };
        res.json({ ...data });
      } catch (error) {
        console.log(error);
        next(error);
      }  
})

route.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        if (!email) {
            const error = new ErrorObj(400, "Email is required");
            next(error);
            return;
        }
        if (!password) {
            const error = new ErrorObj(400, "Password is required");
            next(error);
            return;
        }
        // validate email and password with database
        const user = await User.findOne({ email });
        console.log(user)

        if (!user) {
            const error = new ErrorObj(400, "Email is wrong");
            next(error);
            return;
        }

        // check password
        const validatePassword = await bcrypt.compare(password, user.password);
        console.log(validatePassword,"dkgjkd")
        if (!validatePassword) {
            const error = new ErrorObj(400, "Password is wrong");
            next(error);
            return;
        }
        // generate jwt token
        const jwtPayload = {
            name: user.name,
            email: user.email,
        };
        const accessToken = accessTokenGenerator(jwtPayload);
        const refreshToken = refreshTokenGenerator(jwtPayload);

        User.refreshToken = refreshToken;
        await user.save();

        const data = new SuccessObj();
        data.token = accessToken;

        data.payload = {
            user: user.toJSON(),
        };
        req.user = { ...jwtPayload };
        res
            .cookie("userEmail", `${User.email}`, {
                httpOnly: true,
                secure: true,
                maxAge: 86400,
            })
            .cookie("jwt", accessToken, {
                httpOnly: true,
                secure: true,
                maxAge: 86400,
            })
            .json({ ...data });
    } catch (error) {
        console.log(error);
        next(error);
    }
});


module.exports = route;
