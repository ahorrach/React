import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
   name: 'journal',
   initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    /*active: {
        id: 'ABC123',
        title: '',
        body: '',
        date: 1234567,
        imageUrls: [],
    }*/
   },
   reducers: {
    savingNewNote: (state) => {
        state.isSaving = true;
    },
    addNewEntynote: (state, action ) => {
        state.notes.push(action.payload);
        state.isSaving = false;
       
     },
     setActiveNote:  (state, action ) => {
        state.active = action.payload;
       
     },
     setNotes: (state, action ) => {
       state.notes = action.payload;
     },
     setSaving: (state ) => {
       
     },
     updateNote: (state, action) => {

     },
     deletenoteById: (state, action) => {

     }
   }
});


export const { addNewEntynote,  
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deletenoteById,
    savingNewNote
} = journalSlice.actions;