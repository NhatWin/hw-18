import User from "../models/User.js";

const controller = {
  showAllUsers() {
    return User.find();
  },
  showUser(id) {
    return User.findById(id);
  },
  createUser(newData) {
    return User.create(newData);
  },
  deleteUser(id) {
    return User.findByIdAndDelete(id);
  },
  updateUser(id, newData) {
    return User.findByIdAndUpdate(id, newData);
  },
};

export default controller;
