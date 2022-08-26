import React, { useState } from 'react';

const Test = (props) => {
    // console.log(props.count)
    // const { count } = props;
    
    const [count, setCount] = useState(0)

    const minus = () => {
        // console.log('minus')
        setCount(count +1)
    }
    const plus = () => {
        // console.log('pluss')
        setCount(count -1)
    }
    console.log(count)
    return (
        <div>
            <div className="count mt-5">
                <h4>{ count}</h4>
                <button onClick={plus} className='ms-3 p-3'>+</button>
                <button button onClick={minus} className='ms-3 p-3'>-</button>
            </div>
        </div>
    );
};

export default Test;