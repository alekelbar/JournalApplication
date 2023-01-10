import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseFirestore } from "../firebase/index.firebase";
import { Note } from "../redux/slices/journal/types/journal.type";
export const loadNotes = async (uid: string) => {
  if (!uid) throw new Error("uid was not provided");
  const newDocRef = collection(firebaseFirestore, `${uid}/journal/notes`);
  const { docs } = await getDocs(newDocRef);

  return docs.map((doc): Note => {
    return { ...doc.data() } as Note;
  });
};
