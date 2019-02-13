import React from 'react';
import {FieldProps} from 'formik';
import Select, {Option, ReactSelectProps} from 'react-select';

export const SelectField: React.SFC<ReactSelectProps & FieldProps> = ({
                                                                          options,
                                                                          field,
                                                                          form,
                                                                      }) => (
    <Select
        className='cart_select'
        options={options}
        name={field.name}
        value={options ? options.find(option => option.value === field.value) : ''}
        onChange={(option: Option) => form.setFieldValue(field.name, option.value)}
        onBlur={field.onBlur}
        isOptionDisabled={(option) => option.disabled === true}
    />
);