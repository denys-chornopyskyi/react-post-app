import React, {useState} from 'react';

const TwoBindInput = () => {
    const [value, setValue] = useState('')

    return (
        <div>
            <h2>{value}</h2>
            <input value={value} onChange={(event) => setValue(event.target.value)}/>
        </div>
    );
};

export default TwoBindInput;