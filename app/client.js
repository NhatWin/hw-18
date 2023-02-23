import mongoose from "mongoose";

export default () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/students")
    .then(() => {
      console.info("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err.message);
    });
};
