import React, { Component } from 'react';
import SearchBar from '../containers/SearchBar';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default App;
