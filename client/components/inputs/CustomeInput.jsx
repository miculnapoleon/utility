import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss'

const CustomeInput = ({ name, id, type='text', placeholder='', size='small', handleChange }) => {
    const [value, setValue] = useState('')

    const handleInputState = (e) => {
        setValue(e.target.value)
        handleChange(e.target.value)
    }

    return (
        <>
            <label htmlFor={ id }>{ name }</label>
            <input
                className={`${styles.inputContainer} ${styles[size]}`}
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={ handleInputState }
            />
        </>
    )
}

CustomeInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string
}

export default CustomeInput;