import { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "A username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "A email is required"],
    unique: true,
    match: [/.+@.+\..+/],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.virtual("userFriends").get(function () {
  return this.friends.length;
});

export default module("User", userSchema);
