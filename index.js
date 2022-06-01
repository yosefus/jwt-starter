require("dotenv").config()

const
   express = require('express'),
   app = express(),
   PORT = process.env.PORT || 4321

require("./db")()

app.use(express.json());

app.use(express.static('./public'))

app.use("/api/user", require("./ROUTER/userRouter"))

app.listen(PORT, () => console.log(`Connected to port ${PORT}`));