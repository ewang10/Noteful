import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import NoteNavError from './NoteNavError';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <NoteNavError />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});