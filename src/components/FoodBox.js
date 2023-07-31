import { Card, Col, Button } from 'antd';

function FoodBox({food, onDelete}) {
    const handleDelete = () => {
        // Call the onDelete prop with the food's name to remove it from the list
        onDelete(food.name);
    };
    
    return (
      <Col>
        <Card
          title={food.name}
          style={{ width: 230, height: 300, margin: 10 }}
        >
          <img src={food.image} height={60} alt="food" />
          <p>Calories: {food.calories}</p>
          <p>Servings: {food.servings}</p>
          <p>
            <b>Total Calories: {food.calories} * {food.servings} </b> kcal
          </p>
          <Button type="primary" onClick={handleDelete}> Delete </Button>
        </Card>
      </Col>
    );
  }
  
  export default FoodBox;