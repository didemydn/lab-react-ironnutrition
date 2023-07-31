import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import { Row, Divider, Button } from 'antd'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [allFood, setAllFood] = useState(foods);
  const addFoodItem = (newFood) => {
    setAllFood([...allFood, newFood]);
  };

  const handleSearch = (searchText) => {
    // Filter the food list based on the search text
    const filteredItems = allFood.filter(
      (food) =>
        food.name.toLowerCase().includes(searchText.toLowerCase()) ||
        food.calories.toString().includes(searchText)
    );

    setAllFood(filteredItems);
  };

  // Function to delete a food item from the list
  const deleteFoodItem = (foodName) => {
    const updatedFoodList = allFood.filter((food) => food.name !== foodName);
    setAllFood(updatedFoodList);
  };

  return (
    <div className="App">
      <AddFoodForm onAddFood={addFoodItem}/>
      <Search onSearch={handleSearch} />
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFood.map((food)=>(
          <FoodBox key={food.name} food={food} onDelete={deleteFoodItem}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
