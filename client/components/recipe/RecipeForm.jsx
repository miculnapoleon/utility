import React from 'react';
import CustomeInput from '../inputs/CustomeInput';
import styles from './recipe.module.scss';

const RecipeForm = () => {

    const handleTitle = (name) => {
        console.log(name)
    }
    return (
        <div className={styles.formContainer}>
            <CustomeInput
                name={'Title'}
                id={'title'}
                size="medium"
                handleChange={ handleTitle }
            />
        </div>
    )
}

export default RecipeForm;