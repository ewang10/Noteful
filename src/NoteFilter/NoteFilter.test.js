import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import NoteFilter from './NoteFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NoteFilter />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});