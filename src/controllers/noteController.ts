import { Request, Response } from "express";
import * as noteService from "../services/noteService";

export const createNote = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const note = await noteService.createNote(title, content);
    res.status(201).json(note);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await noteService.getAllNotes();
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const note = await noteService.getNoteById(id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error("Error fetching note by id:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  try {
    const updatedNote = await noteService.updateNote(id, title, content);
    if (updatedNote) {
      res.json(updatedNote);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const success = await noteService.deleteNote(id);
    if (success) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
