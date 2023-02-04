import { addDoc, collection, doc, updateDoc } from "firebase/firestore/lite";
import { firebaseFirestore } from "../../../firebase/index.firebase";
import {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
} from "../../slices/journal";
import { Note } from "../../slices/journal/types/journal.type";
import { loadNotes } from "../../../helpers/loadNotes";
import { AppDispatch, RootState } from "../../store/store.redux";

export const startCreateEmptyNote = () => {
  return async (dispatch: any, getState: any) => {
    const {
      auth: { uid },
    } = getState();

    // * Process to make a actual Note in saving state
    dispatch(setSaving(true));

    // * Process to make a new note on firebase
    const newNote: Note = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };

    const docRef = await addDoc(
      collection(firebaseFirestore, `${uid}/journal/notes`),
      newNote
    );

    newNote.id = docRef.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
    dispatch(setSaving(false));
  };
};

export const startSetNotes = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("The uid was not provided");

    const notes = await loadNotes(uid);
    // make the notes dispatch
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setSaving(true));

    const { uid } = getState().auth;
    const { active } = getState().journal;

    const newNote = { ...active };
    delete newNote.id;

    console.table(active);
    const docRef = doc(
      firebaseFirestore,
      `${uid}/journal/notes/${active!!.id}`
    );

    await updateDoc(docRef, newNote);

    dispatch(setSaving(false));
  };
};
