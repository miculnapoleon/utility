import { SET_RECIPE_TO_STATE } from '../actions/types';

const initialState = {
    recipe: {}
}
const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RECIPE_TO_STATE:
            return {
                ...state,
                recipe: action.payload
            }
        default:
            return state
    }
}

export default recipeReducer;