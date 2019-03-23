import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import CardList from './CardList.js';
import { robots } from './Robots.js';


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    searchChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchField:e.target.value
        }) 


    }
    render() {
            const filteredRobots = this.state.robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            })
            return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.searchChange}/>
                    <CardList robots={filteredRobots} />
                </div>
            )
        }
    }


    export default App