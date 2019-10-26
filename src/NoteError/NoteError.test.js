import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import NoteError from './NoteError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <NoteError />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
