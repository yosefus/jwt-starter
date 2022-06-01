const
   mongoose = require("mongoose"),
   bcrypt = require("bcryptjs"),
   UsersSchema = new mongoose.Schema({
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true, select: false },
      isDelete: { type: Boolean, default: false }
   }),
   UserModel = new mongoose.model("Users", UsersSchema)


// create one to check

// const
//    user = { name: "avi", email: "a@a", password: bcrypt.hashSync("1234", 8) },
//    createUser = async (u) => await UserModel.create(u)

// createUser(user)
//    .then(res => console.log(res))
//    .catch(error => console.log(error))

module.exports = UserModel