import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import "./quickQuote.css";

const destinations = [
    {
      value: 'SAN',
      label: 'San Diego Airport',
    },
    {
      value: 'LAX',
      label: 'LAX',
    },
    {
      value: 'SDH',
      label: 'San Diego Harbor',
    },
    {
      value: 'CBX',
      label: 'Cross Border Express',
    },
  ];

const quickQuote = () => {
    return (
        <div className="quickQuote">
            <p>Please enter your ZIP code for a quick quote</p>
            <TextField 
                id="outlined-with-placeholder"
                label="Zip Code"
                placeholder="Zip Code"
                margin="normal"
                variant="outlined"
                inputProps={{ maxLength: 5 }}
            />
            <TextField 
                id="outlined-with-placeholder"
                label="Destination"
                placeholder="Destination"
                margin="normal"
                variant="outlined"
                type="text"
                
            />
        </div>
        
    )
}

export default quickQuote;