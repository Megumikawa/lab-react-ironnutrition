import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.myChange} type="text" placeholder="Seach food name" />
      </div>
    )
  }
}

export default Search