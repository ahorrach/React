import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEntynote,savingNewNote,setActiveNote, setNotes } from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {

    return async( dispatch, getState ) => {

        dispatch(savingNewNote());

        // uid
      const { uid } = getState().auth;

        const newNote = {
            tittle: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc= doc(collection(FirebaseDB,`${uid}/journal/notes`));
        await setDoc(newDoc,newNote);

        newNote.id = newDoc.id;
        dispatch( addNewEntynote( newNote) );
        dispatch( setActiveNote( newNote));

    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {

        // uid
        const { uid } = getState().auth;
        const notes = await loadNotes(uid);

        dispatch(setNotes(notes))
    }



}