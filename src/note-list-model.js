'use strict';

class NoteList {

    constructor() {
      this.allNotes = [];
    }

    add(text){
      let note = new Note(text);
      this.allNotes.push(note);
    };

    all(){
      return this.allNotes;
    };
}