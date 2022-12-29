import { createSlice } from "@reduxjs/toolkit";
import { journalState } from "./types/journal.type";

const initialState: journalState = {
  isSaving: true,
  messageSaved: "",
  notes: [],
  active: {
    id: "",
    title: "",
    body: "",
    date: 121212,
    imageUrls: [],
  },
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewEmptyNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    setNotes: (state, action) => {},
    setSaving: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {},
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;

export default journalSlice;
