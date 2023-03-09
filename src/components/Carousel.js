import React, { useState, useEffect } from 'react';
import './Carousel.css';

function Carousel(props) {

    // children prop will be the content displayed on the Carousel
    const { children } = props


    // track current position within carousel
    const [currentIndex, setCurrentIndex] = useState(0)
    // track amount of items within carousel
    const [length, setLength] = useState(children.length)
    // track touch position of carousel
    const [touchPosition, setTouchPosition] = useState(null)

    // Set/watch the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])

    // move to next item in carousel
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    // nmove to previous item in carousel
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    // update touch position 
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    // to determined direction of swipe, we will need a minimum finger speed of 5
    const handleTouchMove = (e) => {
        const touchDown = touchPosition
    
        if(touchDown === null) {
            return
        }
    
        // grab position on x (horizontal) axis
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
    
        // if diff has increased greatly to the right, move right
        if (diff > 5) {
            next()
        }
    
        // if diff has increased greatly to the left, move left
        if (diff < -5) {
            prev()
        }
    
        // reset touchPosition
        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">

                {currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                }

                <div className="carousel-content-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                >
                    <div className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>

                {currentIndex < (length - 1) &&
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
                }
            </div>
        </div>
    )

}

export default Carousel; 



// #################### Additional Notes

// onTouchStart is an eventListener that tracks the initial position of a 
//  touch within a given element    

    // within this scenario, onTouchStart will be used to determine if 
    // a user is tapping the carousel or attempting to slide

// onTouchMove is an  eventListener that tracks current position of a touch 

// it is being used to measure the speed of the touch movement, which allows 
// us to know if it is a swipe or not 

// Will come back and add infinite loop later


