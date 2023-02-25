import { Router } from "express";
import userController from "../controllers/user-controller.js";

const router = Router();

router.get("/", (_, res) => {
  userController
    .index()
    .then((students) => res.json(students))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
