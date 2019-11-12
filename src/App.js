import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
//import STORE from './dummy-store';
import FolderNav from './FolderNav/FolderNav';
import NoteNav from './NoteNav/NoteNav';
import NoteFilter from './NoteFilter/NoteFilter';
import NoteMain from './NoteMain/NoteMain';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NotefulContext from './NotefulContext';
//import FolderNavError from './FolderNavError/FolderNavError';
//import NoteNavError from './NoteNavError/NoteNavError';
//import NoteFilterError from './NoteFilterError/NoteFilterError';
//import NoteMainError from './NoteMainError/NoteMainError';
//import AddFolderError from './AddFolderError/AddFolderError';
//import AddNoteError from './AddNoteError/AddNoteError';
import ErrorHandler from './ErrorHandler/ErrorHandler';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
      selectedFolder: '',
      selectedNote: ''
    };
  }

  componentDidMount() {
    const folderUrl = 'http://localhost:8000/api/folders';
    fetch(folderUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          folders: data
        });
      })
      .catch(err => alert("something went wrong: " + err.message));

    const notesUrl = 'http://localhost:8000/api/notes';
    fetch(notesUrl)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          notes: data
        });
      })
      .catch(err => alert("something went wrong: " + err.message));
  }

  updateSelectedFolder = folder => {
    this.setState({
      selectedFolder: folder
    });
  }

  updateSelectedNote = note => {
    this.setState({
      selectedNote: note
    });
  }

  deleteNote = noteId => {
    const newNotes = this.state.notes.filter(note =>
      note.id !== noteId);
    this.setState({
      notes: newNotes
    });
  }

  addFolder = folder => {
    this.setState({
      folders: [...this.state.folders, folder]
    });
  }

  addNote = note => {
    this.setState({
      notes: [...this.state.notes, note]
    });
  }

  //Handles navigation for the note page
  //and sidebar.
  handleNav() {
    return (
      <>
        <ErrorHandler>
          <Route
            exact path="/"
            component={FolderNav}
          />
          <Route
            path="/folder/:folderId"
            component={FolderNav}
          />
        </ErrorHandler>
        <ErrorHandler>
          <Route
            path="/note/:noteId"
            component={NoteNav}
          />
          <Route
            path="/add-folder"
            component={NoteNav}
          />
          <Route
            path="/add-note"
            component={NoteNav}
          />
        </ErrorHandler>
      </>
    );
  }
  //Handles showing the selected note,
  //and list of notes based on chosen folder.
  handleMain() {
    return (
      <>
        <ErrorHandler>
          <Route
            exact path="/"
            component={NoteFilter}
          />
          <Route
            path="/folder/:folderId"
            component={NoteFilter}
          />
        </ErrorHandler>
        <ErrorHandler>
          <Route
            path="/note/:noteId"
            component={NoteMain}
          />
        </ErrorHandler>

        <ErrorHandler>
          <Route
            path='/add-folder'
            component={AddFolder}
          />
        </ErrorHandler>
        <ErrorHandler>
          <Route
            path='/add-note'
            component={AddNote}
          />
        </ErrorHandler>
      </>
    );
  }

  resetState = () => {
    this.setState({
      selectedFolder: '',
      selectedNote: ''
    });
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      updateFolder: this.updateSelectedFolder,
      updateNote: this.updateSelectedNote,
      deleteNote: this.deleteNote,
      folder: this.state.selectedFolder,
      note: this.state.selectedNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
      reset: this.resetState,
    }
    return (
      <div className="App">
        <NotefulContext.Provider value={contextValue}>
          <nav className="App__nav">{this.handleNav()}</nav>
          <header className="App__header">
            <h1 onClick={() => this.resetState()}>
              <Link to='/'>
                Noteful
            </Link>
            </h1>
          </header>
          <main className="App__main">{this.handleMain()}</main>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
