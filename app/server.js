import express from "express";
import userRouter from "../routes/user-routes.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);

export default () => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};
