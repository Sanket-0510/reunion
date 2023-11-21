const express = require('express')

const propertyRouter = express.Router();
const {handlePropertySearch ,handleAddProperty ,handleListAllProperties, handleGetListedPropertyByUser}= require("../controllers/property")
const {auth} = require("../middlewares/auth")

propertyRouter.get("/list-properties",handleListAllProperties)

propertyRouter.post("/search-property", handlePropertySearch)

propertyRouter.post("/add-property",auth, handleAddProperty)

propertyRouter.get("/my-properties", auth, handleGetListedPropertyByUser)
module.exports = propertyRouter