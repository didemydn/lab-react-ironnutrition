import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import { Row, Divider, Button } from 'antd'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFood, setAllFood] = useState(foods)
  return (
    <div className="App">
      <AddFoodForm/>
      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {allFood.map((food)=>(
          <FoodBox key={food.name} food={food}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
