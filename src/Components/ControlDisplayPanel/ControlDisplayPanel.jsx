import React from 'react';

function ControlDisplayPanel({key, name, value }) {
    return (
        <div>
            <p>{name}: {value}</p>
        </div>
    )
}

export default ControlDisplayPanel;