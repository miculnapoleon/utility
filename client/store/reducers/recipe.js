import { SET_RECIPE_TO_STATE } from '../actions/types';

const initialState = {
    recipes: []
}
const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPE_TO_STATE:
            return {
                ...state,
                recipes: [...state.recipes, ...action.payload]
            }
        default:
            return state
    }
}

export default recipeReducer;