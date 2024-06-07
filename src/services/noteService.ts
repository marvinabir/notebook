import pool from "../db/connection";
import { Note } from "../interface/note";

export const createNote = async (title: string, content: string): Promise<Note> => {
  const result = await pool.query("INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *", [title, content]);
  return result.rows[0];
};

export const getAllNotes = async (): Promise<Note[]> => {
  const result = await pool.query("SELECT * FROM notes");
  return result.rows;
};

export const getNoteById = async (id: number): Promise<Note | null> => {
  const result = await pool.query("SELECT * FROM notes WHERE id = $1", [id]);
  return result.rows[0] || null;
};

export const updateNote = async (id: number, title: string, content: string): Promise<Note | null> => {
  const result = await pool.query("UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING *", [title, content, id]);
  return result.rows[0] || null;
};

export const deleteNote = async (id: number): Promise<boolean> => {
  await pool.query("DELETE FROM notes WHERE id = $1", [id]);
  return true;
};
