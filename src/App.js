import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import CardList from './CardList.js';
import Scroll from "./Scroll.js";


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users =>
                 this.setState({
                     robots: users
                 })
               )

       
    }

    searchChange = (e) => {
        console.log(e.target.value)
        this.setState({
            searchField:e.target.value
        }) 


    }
    render() {
        const { robots, searchField } = this.state;
        const filteredRobots =robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if (robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className="f1  light-green">RoboFriends</h1>
                    <SearchBox searchChange={this.searchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            )
        }
    }
    }


    export default App