import Thought from "../models/Thought.js";
import User from "../models/User.js";

const controller = {
  showAllThoughts() {
    return Thought.find();
  },
  showThought(id) {
    return Thought.findById(id);
  },
  createThought(newThought) {
    return Thought.create(newThought).then((thought) => {
      console.log(thought);
      return User.findOneAndUpdate(
        { username: thought.username },
        { $push: { thoughts: thought._id } },
        { new: true }
      );
    });
  },
  deleteThought(id, thought) {
    return User.findByIdAndUpdate(
      { _id: id },
      { $pull: { thoughts: thought } },
      { new: true }
    );
  },
  updateThought(id, newData) {
    return Thought.findByIdAndUpdate(id, newData);
  },
};

export default controller;
