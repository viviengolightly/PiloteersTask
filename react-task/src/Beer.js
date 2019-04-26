import React from 'react';

const Beer = ({name, abv, handelButton}) => {

    const handelClick = (event) =>{
        event.preventDefault();
        handelButton();
    };

    return(
        <li onClick={handelClick}>
            <div>
                {name}
            </div>
            <div>
                {abv}
            </div>
        </li>
    );

};

export default Beer;