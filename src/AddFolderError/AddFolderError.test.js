import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddFolderError from './AddFolderError';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <AddFolderError />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});
