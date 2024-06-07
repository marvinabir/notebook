import express from "express";
import * as noteController from "../controllers/noteController";

const router = express.Router();

router.post("/notes", noteController.createNote);
router
.get("/notes", noteController.getAllNotes)
.get("/notes/:id", noteController.getNoteById)
.put("/notes/:id", noteController.updateNote)
.delete("/notes/:id", noteController.deleteNote);

export default router;