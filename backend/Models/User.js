const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password:{type:String,required:true},
    refreshToken: {type: String},
  },
  { collation: {locale: 'en_US', strength: 1} },
);


//Remove refreshToken from the response
User.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken
    delete ret.password
    return ret
  },
})

module.exports = mongoose.model("User", User);

