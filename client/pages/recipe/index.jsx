import React from 'react';
import { connect } from 'react-redux';

import Recipe from '../../components/recipe/Recipe';

const mapStateToProps = (state) => ({
    recipes: state.recipe.recipes,
})

const MainRecipe = (props) => {
    return (
        <Recipe {...props}/>
    )
}

export default connect(mapStateToProps, null)(MainRecipe)