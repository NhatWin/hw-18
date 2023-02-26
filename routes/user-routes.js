import { Router } from "express";
import userController from "../controllers/user-controller.js";

const router = Router();

router.get("/", (_, res) => {
  userController
    .showAllUsers()
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  userController
    .showUser(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  userController
    .createUser(req.body)
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.delete("/:id", (req, res) => {
  userController
    .deleteUser(req.params.id)
    .then((user) => res.json(["User deleted"]))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  userController
    .updateUser(req.params.id, req.body)
    .then((user) => res.json(["User updated"]))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
