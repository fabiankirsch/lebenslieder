import React from 'react';

const AudioComponent = ({ name, source }) => {
    return (
        <div>
            <p>{name}</p>
            <audio controls>
                <source src={source} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioComponent;
