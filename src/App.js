import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import STORE from './dummy-store';
import FolderNav from './FolderNav/FolderNav';
import NoteNav from './NoteNav/NoteNav';
import NoteFilter from './NoteFilter/NoteFilter';
import NoteMain from './NoteMain/NoteMain';
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      store: STORE,
      selectedFolder: '',
      selectedNote: ''
     };
  }

  updateSelectedFolder(folder) {
    this.setState({
      selectedFolder: folder
    });
  }

  updateSelectedNote(note) {
    this.setState({
      selectedNote: note
    });
  }

  //Handles navigation for the note page
  //and sidebar.
  handleNav() {
    return (
      <>
        <Route
          exact path="/"
          render={() => 
            <FolderNav 
              folders={this.state.store.folders}
              handleSelectedFolder={folder => this.updateSelectedFolder(folder)}
            />
          }
        />
        <Route
          path="/folder/:folderId"
          render={() => 
            <FolderNav 
              folders={this.state.store.folders}
              handleSelectedFolder={folder => this.updateSelectedFolder(folder)}
            />
          }
        />
        <Route
          path="/note/:noteId"
          render={({history}) =>
            <NoteNav 
              folder={this.state.selectedFolder}
            />
          }
        />
        <Route 
          path='/add-folder'
          component={AddFolder}
        />
        <Route 
          path='/add-note'
          render={() => 
            <AddNote 
              folders={this.state.store.folders}
            />
          }
        />
      </>
    );
  }
  //Handles showing the selected note,
  //and list of notes based on chosen folder.
  handleMain() {
    return (
      <>
        <Route
          exact path="/"
          render={() =>
            <NoteFilter 
              folder={this.state.selectedFolder}
              notes={this.state.store.notes}
              handleSelectedNote={note => this.updateSelectedNote(note)}
            />
          }
        />
        <Route
          path="/folder/:folderId"
          render={() =>
            <NoteFilter 
              folder={this.state.selectedFolder}
              notes={this.state.store.notes}
              handleSelectedNote={note => this.updateSelectedNote(note)}
            />
          }
        />
        <Route
          path="/note/:noteId"
          render={() =>
            <NoteMain 
              note={this.state.selectedNote}
              handleSelectedNote={note => this.updateSelectedNote(note)}
            />
          }
        />
      </>
    );
  }

  resetState() {
    this.setState({
      selectedFolder: '',
      selectedNote: ''
    });
  }

  render() {
    return (
      <div className="App">
        <nav>{this.handleNav()}</nav>
        <header>
          <h1 onClick={() => this.resetState()}>
            <Link to='/'>
              Noteful
            </Link>
          </h1>
        </header>
        <main>{this.handleMain()}</main>
      </div>
    );
  }
}

export default App;
