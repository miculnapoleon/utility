import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";
import recipeReducer from './reducers/recipe';

const rootReducer = combineReducers({
    recipe: recipeReducer
});


export default function configStore() {
    const middlewares = [thunkMiddleware];
    const middlewaresEnchancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, middlewaresEnchancers);

    return store;
}