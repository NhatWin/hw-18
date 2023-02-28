import { Router } from "express";
import thoughtController from "../controllers/thought-controller.js";

const router = Router();

router.get("/", (_, res) => {
  thoughtController
    .showAllThoughts()
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.get("/:id", (req, res) => {
  thoughtController
    .showThought(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.post("/", (req, res) => {
  thoughtController
    .createThought(req.body)
    .then((user) => res.json(["Thought created"]))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.delete("/:thoughtId/user/:userId", (req, res) => {
  thoughtController
    .deleteThought(req.params.userId, req.params.thoughtId)
    .then((user) => res.json(["Thought deleted"]))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.put("/:id", (req, res) => {
  thoughtController
    .updateThought(req.params.id, req.body)
    .then((user) => res.json(["Thought updated"]))
    .catch((err) => {
      res.json({ error: err.message });
    });
});

export default router;
