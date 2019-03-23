import React from 'react';

const onSearchChange = () => {
    
}

const SearchBox = (props) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b-green bg-lightest-blue'
                type='search'
            placeholder='Search Robots'
            ></input>
        </div>
    )
}

export default SearchBox