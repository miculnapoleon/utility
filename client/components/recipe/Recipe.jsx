import React, { useState } from 'react';
import styles from './recipe.module.scss';
import RecipeForm from './RecipeForm';

const Recipe = ({ recipes }) => {
    const [showForm, setShowForm] = useState(false);

    const handleAddRecipe = () => {
        setShowForm(true)
    }

    const renderAddRecipe = () => {
        return (
            <div className={ styles.centerButton }>
                <button onClick={handleAddRecipe}>Add recipie</button>
                <div>Apparently no recipes exist at the moment.</div>
                <div>Press <strong>Add recipe</strong> to add you own!</div>
            </div>
        )    
    }

    const renderRecipeList = () => {
        return (
            <div>TEST</div>
        )
    }

    return (
        <div className={styles.container}>
            {recipes.length ? renderRecipeList() : showForm ? <RecipeForm /> : renderAddRecipe()}
        </div>
    )
}

export default Recipe;