import { model, Schema } from "mongoose";
const reactionSchema = require("./Reaction.js");
const date = require("../utils/date.js");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: [true, "A thought is required"],
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => date(time),
    },
    username: {
      type: String,
      required: [true, "username is required"],
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reaction.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
