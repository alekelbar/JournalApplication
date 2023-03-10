import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { journalState, Note } from "./types/journal.type";

const initialState: journalState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewEmptyNote: (state, { payload }: PayloadAction<Note>) => {
      return { ...state, notes: [payload, ...state.notes] };
    },
    setActiveNote: (state, { payload }: PayloadAction<Note>) => {
      return { ...state, active: payload };
    },
    setNotes: (state, action) => {},
    setSaving: (state, { payload }: PayloadAction<boolean>) => {
      return { ...state, isSaving: payload };
    },
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
