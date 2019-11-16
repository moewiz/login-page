import React from 'react';
import Select from 'react-select';

const CustomSelect = ({options, field, form, placeholder}) => {
  return (
    <Select
      options={options}
      name={field.name}
      value={options ? options.find(option => option.value === field.value) : ''}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
      placeholder={placeholder}
      className="custom-select-container"
      classNamePrefix="react-select"
    />
  );
};

export default CustomSelect;
