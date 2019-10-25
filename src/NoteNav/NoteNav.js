import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import './NoteNav.css';

class NoteNav extends Component {
    static contextType = NotefulContext;
    render() {
        const {note} = this.context;
        return (
            <div className="NoteNav">
                <button
                    type="submit"
                    onClick={() => this.props.history.goBack()}
                >
                    Back
                </button>
                <p>
                    {note ? note.name : ''}
                </p>

            </div>
        );
    }
}

NoteNav.defaultProps = {
    history: {
        goBack: () => { }
    }
}

export default NoteNav;