import React from 'react';
import './ListProfile.css';
import {Link} from "react-router-dom";

export const ListProfile = ({principals}) =>(
    <div className='list'>
        <div className='your-past-projects'>
            <h3>Estos son tus posts anteriores!</h3>
        </div>
        <ul className="uk-list uk-list-striped">
            {principals.length >= 1 ? principals.map((data,i)=>
                <li key={i}>{data.nombre}<br/>{data.post}</li>
            ) : <li>You have no projects yet.</li>
            }
                

        </ul>
    </div>
);
