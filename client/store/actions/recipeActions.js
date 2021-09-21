import {SET_RECIPE_TO_STATE} from './types';

export function setRecipie(recipe) {
    return {
        type: SET_RECIPE_TO_STATE,
        payload: recipe
    }
}