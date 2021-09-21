const initialState = {
    recipe: {}
}
const reducer = (state = initialState, action) => {
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