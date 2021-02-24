import React, { Component } from 'react'

 class AddForm extends Component {
  render() {

    //destructuring コードをわかりやすくて簡潔にする
    const{onAddFood} = this.props

    return (
      <form onSubmit={onAddFood}>
        <input name="name" type="text" placeholder="Enter title" />
        <input name="calories" type="number" />
        <input name="image" type="text" />
        <button type="submit">SUBMIT</button>
      </form>
    )
  }
}

export default AddForm