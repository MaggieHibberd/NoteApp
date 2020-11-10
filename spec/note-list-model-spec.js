'use strict';

(function(exports) {
    let noteList = new NoteList();
    function noteListisAnArray() {
        assert.isTrue(Array.isArray(noteList.allNotes));
      }
    noteListisAnArray();
  })(this);