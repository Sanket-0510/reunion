const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8000
const dotenv = require("dotenv")
dotenv.config()
const {connection} = require("./utils/connection")
connection();


//routes
const userRouter = require("./routes/user")
app.use("/", userRouter)
app.listen( port, ()=>{
    console.log(`listening at ${port}`)
})