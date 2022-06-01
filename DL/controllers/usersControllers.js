const UserModel = require("../models/users")

const
   getUsers = async (filter) => await UserModel.find(filter),
   getUserWithPass = async (filter) => await UserModel.findOne(filter, "+password"),
   getById = async (id) => await UserModel.findById(id),
   update = async (id, newData) => await UserModel.findByIdAndUpdate(id, newData, { new: true }),
   create = async (newUser) => await UserModel.create(newUser)

module.exports = { getUsers, create, getById, update, getUserWithPass }