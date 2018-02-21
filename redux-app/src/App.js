import React, { Component } from 'react';
import BookList from './containers/BookList';
import './App.css';

class App extends Component {
    state = {

    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
               <BookList />
            </div>
        );
    }
}

export default App;
