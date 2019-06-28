import React, {Component} from 'react';
import './Quote.css';

export const Quote=()=>(
<div className="bg uk-section uk-section-large uk-section-muted">
    <div className="flex uk-container">

        <h3 className='quote'>The greatest threat to our planet is the belief that someone else will save it.</h3>

        <div className="uk-grid-match uk-child-width-1-3@m" uk-grid="true">
            <div>
                <p className='author'>Robert Swan</p>
            </div>
        </div>
    </div>
</div>
);

export default Quote;