import { Schema, Types } from "mongoose";
import formatDate from "../utils/date.js";

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: [true, "body required"],
      maxLength: 280,
    },
    username: {
      type: String,
      required: [true, "username required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => formatDate(time),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

export default reactionSchema;
