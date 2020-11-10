'use strict';

(function(exports){
  let noteList = new NoteList();
  noteList.add("seltzer is the WORST");
  noteList.add("but javascript is the BEST");
  let noteListView = new NoteListView(noteList);
  
  function initializesWithNoteListObject(){
    assert.isTrue(noteListView.list === noteList.all());
  };

  function returnsNoteListModelInHTML(){
    console.log(noteListView.returnHTML());
    assert.isTrue(noteListView.returnHTML() === "<ul><li><div>seltzer is the WORST</div></li><li><div>but javascript is the BEST</div></li></ul>");
  };

  initializesWithNoteListObject()
  returnsNoteListModelInHTML()
})(this);