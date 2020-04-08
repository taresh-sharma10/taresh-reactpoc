import React from 'react';
import img1 from "./assets/gutten.png";
const Card = props => {
    return (
        <div className='card text-center'>
            <div className='overflow'>
                <img src={img1} alt="Image 1" className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>title</h4>
                <p className='card-text text-secondary'>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
                <a href='#' className='btn btn-outline-success'>
                    Go Anywhere
                </a>
            </div>
        </div>
    );
};

export default Card;
