"use strict";

(function(exports){
  function textIsNotEmpty() {
    let note = new Note("I hate JS");
    assert.isTrue(note.text === "I hate JS");
  };

  function canViewText() {
    let note = new Note("Monday");
    assert.isTrue(note.viewNote() === "Monday");
  };

  textIsNotEmpty();
  canViewText();
})(this);