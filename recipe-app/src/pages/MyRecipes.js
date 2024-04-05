import { useState } from "react";

function MyRecipes() {
    
    const [recipe, setRecipe] = useState("");
    const [recipes, setRecipes] = useState([]);

    const addRecipe = () => {
        if (recipe !== "") {
            setRecipes([...recipes, recipe]);
            setRecipe("");
        }
    };

    const deleteRecipe = (text) => {
        const newRecipes = recipes.filter((recipe) => {
            return recipe !== text
        });
        setRecipes(newRecipes);
    };

    return (
        <div className="app">
            <h1>My Recipes</h1>

            <div className="input-wrapper">
                <input 
                    type="text" 
                    name="recipe" 
                    value={recipe}
                    placeholder="Create a new recipe"
                    onChange={(e) => {
                        setRecipe(e.target.value)
                    }}
                />
                <button className="add-button" onClick={addRecipe}>Add</button>
            </div>

            <>
            {recipes?.length > 0 ? (
                <ul className="recipe-list">
                    {recipes.map((recipe, index) => (
                    <div className="recipe">
                        <li key={index}> {recipe} </li>

                        <button 
                        className="delete-button"
                        onClick={() => {
                            deleteRecipe(recipe);
                        }}
                        >Delete</button>
                    </div>
                ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No recipes found</p>
                </div>
            )}
            </>
            
        </div>
    )

};
  
export default MyRecipes;