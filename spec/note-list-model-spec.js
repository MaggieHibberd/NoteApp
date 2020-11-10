'use strict';

(function(exports) {
    let noteList = new NoteList();

    function noteListisAnArray() {
      assert.isTrue(Array.isArray(noteList.allNotes));
    }

    function addsNewNote(){
      noteList.add("I love seltzer");
      assert.isTrue(noteList.allNotes[0].viewNote() === "I love seltzer");
    }

    function returnsAllNoteModels(){
      noteList.add("I love seltzer");
      noteList.add("I love javascript");
      console.log(noteList.all()[1].viewNote());
      assert.isTrue(noteList.all()[0].viewNote() === "I love seltzer");
      assert.isTrue(noteList.all()[2].viewNote() === "I love javascript");
    }
    noteListisAnArray();
    addsNewNote();
    returnsAllNoteModels();
  })(this);