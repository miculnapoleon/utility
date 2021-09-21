import recipeRducer from './reducers/recipe';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from "redux-thunk";

const rootReducer = combineReducers({
    recipe: recipeRducer
});


export default function configStore() {
    const middlewares = [thunkMiddleware];
    const middlewaresEnchancers = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, middlewaresEnchancers);

    return store;
}