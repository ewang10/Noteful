import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import FolderNavError from './FolderNavError';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <FolderNavError />
        </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
});