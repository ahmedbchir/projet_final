const mongoose= require('mongoose')
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    cin : {type : Number},
    firstName : {type : String},
    lastName : {type : String},
    email : {type : String},
password : {type : String},
    age : {type : Number},
    phoneNumber : {type : Number},
    role : {type : String}
})

userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
      const auth = await bcrypt.compare(password, user.password);
      if (auth) {
        return user;
      }
      throw Error("incorrect password");
    }
    throw Error("incorrect email");
  };
module.exports = mongoose.model('user',userSchema)

