import React from 'react';
import faker from 'faker';

const Commenting = (props)=>{

    return (
    <div className = "comment">
          <a href="/" className="avatar">
            <img alt="greg" src={faker.image.avatar()} />
          </a>
        <div className="name">
           <a href="/" className="avatar">
               {props.author}
           </a>
        </div>
    </div>
    );
};

export default Commenting;