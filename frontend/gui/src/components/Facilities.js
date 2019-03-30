import React, { Fragment } from 'react'


const Facilities = (props) => {
    
    return (
        <div>
            {props.data.map((objectMapped, index) => 
            <Fragment>
                <div>{objectMapped.name}</div>
                <div>{objectMapped.number}</div><br/>
            </Fragment>
            )}
            
        </div>
    )
}

export default Facilities