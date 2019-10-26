import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import NoteFilterError from './NoteFilterError';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <NoteFilterError />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});