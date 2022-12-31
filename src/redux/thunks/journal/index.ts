import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseFirestore } from "../../../firebase/index.firebase";
import {
  addNewEmptyNote,
  setActiveNote,
  setSaving,
} from "../../slices/journal";
import { Note } from "../../slices/journal/types/journal.type";

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
      title: "",
      body: "",
      date: new Date().getTime(),
      id: uid,
      imageUrls: [],
    };

    await setDoc(newDoc, newNote);

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};
