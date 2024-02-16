import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star-rating.component.css'


export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(starIndex) {
        setRating(starIndex);
    }
    function handleMouseMove(starIndex) {
        setHover(starIndex);
    }
    function handleMouseleave() {
        setHover(rating);
    }
    return (<div className='star-rating'>
        {
            [...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (<>
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'Active' : 'Inactive'}
                        onClick={() => { handleClick(index) }}
                        onMouseMove={() => { handleMouseMove(index) }}
                        onMouseLeave={() => { handleMouseleave() }}
                        size={40}
                    />
                </>)

            })
        }
        <p>You Have Given Rating of {rating} stars.</p>
    </div>
    )
};