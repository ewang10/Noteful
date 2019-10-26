import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddNoteError from './AddNoteError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddNoteError />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
