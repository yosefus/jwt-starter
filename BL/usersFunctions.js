const
   bcrypt = require("bcryptjs"),
   { getUserWithPass } = require("../DL/controllers/usersControllers"),
   jwt = require('jsonwebtoken'),
   secret = process.env.SECRET

const login = async ({ email, password }) => {
   if (!email || !password) throw "missing data"

   const findUser = await getUserWithPass({ email })

   if (!findUser) throw "not found"
   if (!bcrypt.compareSync(password, findUser.password)) throw "not auth"

   return findUser
}

// check the login

// login({ email: "a@a", password: "1234" })
//    .then(res => console.log(res))
//    .catch(err => console.log(err))

const signUp = async ({ email, password, name }) => {


}

module.exports = { login, signUp }