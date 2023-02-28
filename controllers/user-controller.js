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
  addFriend(id, newFriend) {
    return User.findByIdAndUpdate(
      { _id: id },
      {
        $push: { friends: newFriend },
      },
      { new: true }
    );
  },
  deleteFriend(id, friend) {
    return User.findByIdAndUpdate(
      { _id: id },
      { $pull: { friends: friend } },
      { new: true }
    );
  },
};

export default controller;
