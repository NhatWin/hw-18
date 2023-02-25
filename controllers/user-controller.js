import User from "../models/User.js";

const controller = {
  index() {
    return User.find();
  },
};

export default controller;
