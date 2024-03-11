import React from 'react';

function DisplayPanel({ name, value }) {
    return (
        <div>
            <p>{name}: {value}</p>
        </div>
    )
}

export default DisplayPanel;