class NoteListView {
  constructor(noteList = new NoteList()){
    this.list = noteList.all();
  }

  returnHTML(){
    let htmlstring = "";
    for(let i=0; i < this.list.length; i++){
      htmlstring += "<li><div>" + this.list[i].viewNote() + "</div></li>";
    }
    return "<ul>" + htmlstring + "</ul>";
 
  };
}