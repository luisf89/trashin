import React from 'react'
import img4 from '../../images/Recycling.png'

const Cards  = ({title,image,description})=>(
        <div className=" uk-card uk-card-default" style={{margin: 20}} >
            <div className="uk-card-media-top">
                <img  src={image} width='200px' height='500px' alt=""/>
            </div>
            <div>
                <h3 className="uk-card-title card-title">{title}</h3>
                <p>{description}</p>
        </div>
      </div>

)


export default Cards