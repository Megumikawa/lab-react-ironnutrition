import React, { Component } from 'react'
import foodsJson from '../foods.json';
import 'bulma/css/bulma.css';
import FoodBoxDetails from './FoodBoxDetails'
import AddForm from './AddForm'
import Search from './Search'


  class FoodBox extends Component {

    state = {
      foods: foodsJson,
      showForm: false,
      filteredFoods: []
    }

// ------this is function for submit button------//

    handleAddForm = (event) => {
      event.preventDefault()
      let name = event.target.name.value
      let calories = event.target.calories.value

      let newFoodItem = {
        name:name,
        calories:calories
      }

      this.setState ({
        showForm:false,
        foods: [newFoodItem, ...this.state.foods],
        filderedFoods: [newFoodItem, ...this.state.foods]
      })
    }

// ------this is function for showform------//
    handleShowForm = () => {
      this.setState({ showForm: true})
    }

// ------this is a function for change ------//
    handleChange = (event) => {
      let searchText = event.target.value.toLowerCase()
      let filterList = this.state.foods.filter((singleFood) => {
        return singleFood.name.toLowerCase().includes(searchText)
      })
      this.setState ({
        filteredFoods: filterList
      })
    }

// ------invoke------//
    render() {
      const{filteredFoods,showForm} =this.state
      return (
        <div>
        <Search myChange={this.handleChange}/>
        {
          showForm ? <AddForm onAddFood={this.handleAddForm}/> : <button onClick={this.handleShowForm}>Show</button>
        }
        

        {filteredFoods.map((singleFood, thisIsKey) => {
          return <FoodBoxDetails 
            key={thisIsKey}
            name={singleFood.name}
            image={singleFood.image}
            calories={singleFood.calories}
          />
        })}
        
        </div> 
      )}
  }

export default FoodBox