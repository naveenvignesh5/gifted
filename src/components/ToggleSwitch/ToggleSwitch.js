import React from 'react';

import './ToggleSwitch.sass';

const ToggleSwitch = (props) => (
    <label className="switch">
        <input {...props} type="checkbox"/>
        <span className="slider round"/>
    </label>
);

export default ToggleSwitch;
