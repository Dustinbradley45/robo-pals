import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import CardList from './CardList.js';
import { robots } from './Robots.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }
        render() {
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox />
                    <CardList robots={this.state.robots} />
                </div>
            )
        }
    }


    export default App