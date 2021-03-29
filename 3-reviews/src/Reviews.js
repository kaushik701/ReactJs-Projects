import React, { useState } from 'react'
import People from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Reviews = () => {
    const [index,setIndex] = useState(0);
    const {name,job,image,text} = People[index]

    const checkNumber = (number) => {
        if (number > People.length-1){
            return 0;
        }
        if (number < 0){
            return People.length-1;
        }
        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index+1;
            return checkNumber(newIndex);
        });
    };
    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index-1;
            return checkNumber(newIndex);
        });
    };
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random()*People.length);
        if (randomNumber === index){
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber));
    };

    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img'></img>
                <span className='quote-icon'>
                    <FaQuoteRight/>
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div className='button-container'>
                <button className='prev-btn' onClick={prevPerson}>
                    <FaChevronLeft></FaChevronLeft>
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight></FaChevronRight>
                </button>
            </div>
            <button className='random-btn' onClick={randomPerson}>Surprise ME!!!</button>
        </article>
    )
}

export default Reviews
