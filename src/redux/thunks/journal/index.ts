import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseFirestore } from "../../../firebase/index.firebase";
import {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
} from "../../slices/journal";
import { Note, journalState } from "../../slices/journal/types/journal.type";
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

    const newDoc = doc(collection(firebaseFirestore, `${uid}/journal/notes`));
    const newNote: Note = {
      title: "Example title of",
      body: "Fugiat quis consectetur excepteur tempor nulla labore consectetur elit deserunt. Incididunt reprehenderit.",
      date: new Date().getTime(),
      id: uid,
      imageUrls: [],
    };

    await setDoc(newDoc, newNote);

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
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
