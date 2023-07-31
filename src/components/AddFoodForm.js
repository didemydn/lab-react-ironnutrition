import { useState } from "react";
import { Divider, Input } from 'antd';
import foods from "../foods.json";

function AddFoodForm(props) {
    //name , image , calories and servings.
    const [name, setName] = useState("");
    const [image, setImage] =useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleName = e => setName(e.target.value);
    const handleImage = e => setImage(e.target.value);
    const handleCalories = e => setCalories(e.target.value);
    const handleServings = e => setServings(e.target.value);

    const handleSubmit = (e) => {        // <==  ADD
        e.preventDefault();
        const newFood = { name, image, calories, servings };
     
        console.log("Submitted: ", newFood);
        props.onAddFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
      }

    return (
        
        <form onSubmit={handleSubmit}>
          <Divider>Add Food Entry</Divider>
    
          <label>Name</label>
          <Input name="name" value={name} type="text" onChange={handleName}  />
    
          <label>Image</label>
          <Input name="image" value={image} type="text" onChange={handleImage} />
    
          <label>Calories</label>
          <Input name="calories" value={calories} type="number" onChange={handleCalories} />  

          <label>Servings</label>
          <Input  name="servings" value={servings} type="number" onChange={handleServings} />  

          <button type="submit">Create</button>
        </form>
         
      );
    }
    
    export default AddFoodForm;

