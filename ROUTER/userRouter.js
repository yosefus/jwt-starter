const { login, signUp } = require('../BL/usersFunctions')

const
   express = require('express'),
   router = express.Router()

router.post("/login", async (req, res) => {
   const { email, password } = req.body
   try {
      const result = await login({ email, password })
      res.status(200).send(result)
   } catch (error) {
      res.status(500).send(error.message || error)
   }



})

router.post("/sign-up", async (req, res) => {
   const { email, password, name } = req.body
   try {
      const result = await signUp({ email, password, name })
      res.status(200).send(result)
   } catch (error) {
      res.status(500).send(error.message || error)
   }
})

module.exports = router


