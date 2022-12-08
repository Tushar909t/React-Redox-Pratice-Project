import React from 'react';
import Counter from './../components/counter/Counter';

const CounterPages = () => {
    return (
    <div className='container mt-5'>
        <div className="row d-flex justify-content-around">
            <div className=" col-md-6">
            <Counter/>
            </div>
        </div>
    </div>
    );
};

export default CounterPages;