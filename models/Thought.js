import { model, Schema } from "mongoose";
import formatDate from "../utils/date.js";
import reactionSchema from "./Reaction.js";

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
      get: (time) => formatDate(time),
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

export default Thought;
