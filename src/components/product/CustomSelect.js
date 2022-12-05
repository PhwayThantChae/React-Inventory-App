import React from 'react';
import Select from 'react-select';

const CustomSelect = ({ onChange, options, value, className, handleChange }) => {
    const defaultValue = (options, value) => {
        return options ? options.find(option => option.value === value) : "";
    };
    console.log(value, 'ava');
    console.log(onChange, 'ava');


    return (
        <div className={className}>
            <Select
                value={defaultValue(options, value)}
                onChange={value => onChange(value)} 
                options={options} />
        </div>

    )
}


export default CustomSelect;