import React from 'react'
import { TextField } from '@material-ui/core';

export default function DateSelect(props) {

    const { name, label, value, onChange } = props

    return (
        <TextField
        label={label}
        name={name}
        value={value}
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
}
